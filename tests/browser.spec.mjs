import {test,expect} from '@playwright/test';
import {readFile} from 'node:fs/promises';
import {parse} from 'csv-parse/sync';

test('chronology is first, source links are embedded, and filters combine',async({page},info)=>{
  const errors=[]; page.on('pageerror',e=>errors.push(e.message));
  await page.goto('./');
  await expect(page.locator('.desk-record')).toHaveCount(14);
  await page.locator('[data-filter="access"]').selectOption('all');
  await expect(page.locator('.desk-record')).toHaveCount(22);
  await page.locator('[data-filter="access"]').selectOption('readable');
  await expect(page.locator('#chronology-fallback')).toBeHidden();
  await expect(page.locator('h2:visible').first()).toHaveText('Document Chronology');
  await expect(page.locator('#dc-151 h3 a')).toHaveAttribute('href',/\.pdf$/);
  await page.screenshot({path:info.outputPath('desktop.png')});
  await page.locator('[data-filter="access"]').selectOption('packet');
  await expect(page.locator('.desk-record')).toHaveCount(4);
  await page.locator('[data-filter="year"]').selectOption('1992');
  await expect(page.locator('.desk-record')).toHaveCount(2);
  await page.locator('#desk-search').fill('Gates');
  await expect(page.locator('.desk-record')).toHaveCount(2);
  await page.getByRole('button',{name:'Copy filtered-view link',exact:true}).click();
  const shared=await page.evaluate(()=>navigator.clipboard.readText());
  await page.goto(shared);
  await expect(page.locator('.desk-record')).toHaveCount(2);
  expect(errors).toEqual([]);
});

test('local shortlist persists and shared shortlist needs no local storage',async({page,browser})=>{
  await page.goto('./');
  await expect(page.locator('.desk-record')).toHaveCount(14);
  await page.locator('#dc-151 [data-action="save"]').click();
  await page.reload();
  await expect(page.locator('#dc-151 [data-action="save"]')).toHaveAttribute('aria-pressed','true');
  await page.locator('#shortlist-only').check();
  await expect(page.locator('.desk-record')).toHaveCount(1);
  const context=await browser.newContext(); const other=await context.newPage();
  await other.goto(page.url());
  await expect(other.locator('.desk-record')).toHaveCount(1);
  await expect(other.locator('#dc-151')).toBeVisible();
  await context.close();
});

test('candidate deep link exposes provisional notes and copied handoff',async({page})=>{
  await page.goto('./?view=candidates&record=candidate-1');
  await expect(page.locator('#candidate-1 details')).toHaveAttribute('open','');
  await expect(page.locator('#candidate-1 .provisional-note')).toContainText('Not publication-ready');
  await page.locator('#candidate-1 [data-action="copy"]').click();
  const copied=await page.evaluate(()=>navigator.clipboard.readText());
  expect(copied).toContain('PROVISIONAL CANDIDATE NOTE - NOT PUBLICATION-READY');
  expect(copied).toContain('Related request D1: Not recorded');
  expect(copied).toContain('https://archive.org/download/');
});

test('filtered CSV and empty results behave correctly',async({page})=>{
  await page.goto('./?access=packet&year=1992');
  await expect(page.locator('.desk-record')).toHaveCount(2);
  const downloadPromise=page.waitForEvent('download');
  await page.getByRole('button',{name:'Download filtered CSV',exact:true}).click();
  const download=await downloadPromise;
  const rows=parse(await readFile(await download.path(),'utf8'),{columns:true,bom:true});
  expect(rows).toHaveLength(2); expect(rows[0].sources).toContain('https://s3.amazonaws.com/');
  await page.locator('#desk-search').fill('no-such-document-xyz');
  await expect(page.locator('#desk-empty')).toBeVisible();
  await page.locator('.desk-actions [data-action="reset"]').click();
  await expect(page.locator('.desk-record')).toHaveCount(14);
});

test('mobile layout has no page overflow or failed icon loads',async({page},info)=>{
  for (const width of [390,320]) {
    await page.setViewportSize({width,height:844});
    await page.goto('./?record=nsd-79');
    await expect(page.locator('#nsd-79 details')).toHaveAttribute('open','');
    expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect.poll(()=>page.locator('#document-desk img').evaluateAll(images=>images.every(i=>i.complete && i.naturalWidth>0))).toBe(true);
    await page.screenshot({path:info.outputPath(`mobile-${width}.png`)});
  }
});

test('no JavaScript still exposes every chronological source',async({browser,baseURL})=>{
  const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const page=await context.newPage(); await page.goto(baseURL);
  await expect(page.locator('#chronology-fallback tbody tr')).toHaveCount(22);
  await expect(page.locator('#chronology-fallback a[href$=".pdf"]')).toHaveCount(10);
  await context.close();
});

test('failed data request leaves the readable chronology available',async({page})=>{
  await page.route('**/assets/data/desk.json',route=>route.abort());
  await page.goto('./');
  await expect(page.locator('#chronology-fallback')).toBeVisible();
  await expect(page.locator('#chronology-fallback tbody tr')).toHaveCount(22);
});

test('existing reports retain their layout and aligned table columns',async({page})=>{
  await page.goto('reports/current-policy-sweep.html');
  await expect(page.locator('h1')).toContainText('Current Policy');
  const table=page.locator('.table-scroll table').first();
  await expect(table).toBeVisible();
  const aligned=await table.evaluate(table=>{
    const headers=[...table.querySelectorAll('thead th')].map(c=>c.getBoundingClientRect());
    const cells=[...table.querySelector('tbody tr').cells].map(c=>c.getBoundingClientRect());
    return headers.length===cells.length && headers.every((h,i)=>Math.abs(h.x-cells[i].x)<1 && Math.abs(h.width-cells[i].width)<1);
  });
  expect(aligned).toBe(true);
  await page.setViewportSize({width:390,height:844});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
