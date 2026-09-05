import {defineConfig} from '@playwright/test';
export default defineConfig({
  testDir:'./tests', testMatch:'browser.spec.mjs', workers:1,
  use:{baseURL:process.env.SITE_URL || 'http://127.0.0.1:4189/org-man-89-92/',channel:'chrome',viewport:{width:1440,height:1000},permissions:['clipboard-read','clipboard-write']},
  webServer:process.env.SITE_URL ? undefined : {command:'python3 -m http.server 4189 --bind 127.0.0.1 --directory _site',url:'http://127.0.0.1:4189/org-man-89-92/',reuseExistingServer:false,stdout:'ignore',stderr:'ignore'}
});
