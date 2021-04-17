const puppeteer = require('puppeteer');

let opage;
let obrowser;

puppeteer
  .launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  }).then(function (browser) {
    obrowser = browser;
    return browser.newPage();
  }).then(function (page) {
    opage = page;
    return page.goto("https://www.google.com/");
  }).then(function () {
    return Promise.all([
      opage.waitForNavigation(),
      opage.click("[data-pid='2']"),
    ]);
  }).then(function(){
    return opage.type('.gLFyf.gsfi', 'Github');
  }).then(function(){
    return Promise.all([
      opage.waitForNavigation(),
      opage.click(".Tg7LZd"),
      
    ]);
  }).then(function () {
    return opage.screenshot({ path: "ss.png" });
  }).then(function () {
    return obrowser.close();
  })
  .catch(function (err){
  console.log(err);
})
