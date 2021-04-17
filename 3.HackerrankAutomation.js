const puppeteer = require('puppeteer');

let browser;
let page;
let code;
let title;
(async function () {
    browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        slowMo: 50,
    })
    let pages = await browser.pages();
    page = pages[0];
    await page.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");

    await page.type("#input-1", "xaroxo2430@zcai77.com");
    await page.type("#input-2", "123456789");
    await waitClick(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await waitClick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled")
    await waitClick(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled");
    let i = 0;
    while (i < 4) {
        i++;
        await f2();
        async function f1() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 10000);
            })
        }
        await f1();
        await page.goto("https://www.hackerrank.com/interview/interview-preparation-kit/warmup/challenges");
    }
})();
async function f2() {
    await waitClick(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
    await waitClick("#tab-1-item-4");
    await HandleEditorial();
    await page.waitForSelector(".highlight pre");
    code = await page.evaluate(function () {
        return document.querySelector(".highlight pre").textContent;
    });
    title = await page.evaluate(function () {
        return document.querySelector(".challenge-editorial-block.editorial-setter-code h3").innerText;
    })
    await page.click("[data-attr2='Problem']");
    await page.waitForSelector(".css-1hwfws3", { visible: true });
    await page.click(".css-1hwfws3");
    await page.type(".css-1hwfws3", title);
    await page.keyboard.press("Enter");
    await page.waitForSelector(".checkbox-input");
    await page.click(".checkbox-input");
    await page.waitForSelector(".input.text-area.custominput.auto-width");
    await page.click(".input.text-area.custominput.auto-width");
    await page.type(".input.text-area.custominput.auto-width", code);
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.press('X');
    await page.click(".monaco-editor.no-user-select.vs");
    await page.keyboard.press('A');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');
    await page.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled", { visible: true });
    await page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
}
async function waitClick(selector) {
    try {
        await page.waitForSelector(selector, { visible: true })
        await Promise.all([
            page.waitForNavigation(),
            page.click(selector),
        ]);
    }
    catch {
        return 0;
    }
}
async function HandleEditorial() {
    try {
        await page.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled", {
            visible: true,
        });
        await page.click(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");
    } catch {
        return 0;
    }
}
