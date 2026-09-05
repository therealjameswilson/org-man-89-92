// Lightweight UI preview; the published Markdown is rendered by GitHub Pages/Jekyll.
import {readFile,writeFile,mkdir,readdir,cp} from 'node:fs/promises';
import {Liquid} from 'liquidjs';
import {marked} from 'marked';
import {parse} from 'yaml';
const root = new URL('../',import.meta.url);
const site = parse(await readFile(new URL('_config.yml',root),'utf8'));
const output = new URL(`_site${site.baseurl}/`,root);
const liquid = new Liquid({root:new URL('_includes/',root).pathname, dynamicPartials:false});
liquid.registerFilter('relative_url',value=>site.baseurl + value);
const layout = await readFile(new URL('_layouts/default.html',root),'utf8');
await mkdir(output,{recursive:true});
for (const folder of ['','reports/']) {
  await mkdir(new URL(folder,output),{recursive:true});
  for (const name of await readdir(new URL(folder,root))) {
    if (!name.endsWith('.md') || name === 'README.md') continue;
    const text = await readFile(new URL(folder+name,root),'utf8');
    const front = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (!front) continue;
    const page = parse(front[1]);
    const body = await liquid.parseAndRender(text.slice(front[0].length),{site,page});
    const content = marked.parse(body);
    await writeFile(new URL(folder+name.replace(/\.md$/,'.html'),output),await liquid.parseAndRender(layout,{site,page,content}));
  }
}
await cp(new URL('assets',root),new URL('assets',output),{recursive:true});
for (const name of await readdir(new URL('reports/',root))) if (name.endsWith('.csv')) await cp(new URL('reports/'+name,root),new URL('reports/'+name,output));
console.log(`Preview built at ${output.pathname}. Serve _site and open ${site.baseurl}/.`);
