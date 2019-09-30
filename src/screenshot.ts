import puppeteer from 'puppeteer';
import {readFileSync} from 'fs';
export default async function screenshot(path: string, name: string) {
    const contentHtml = readFileSync(path, 'utf8');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(contentHtml);
    await page.screenshot({path: name + '.png'})
    browser.close();
  }