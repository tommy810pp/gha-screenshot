"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const fs_1 = require("fs");
function screenshot(path, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const contentHtml = fs_1.readFileSync(path, 'utf8');
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        yield page.setContent(contentHtml);
        yield page.screenshot({ path: name + '.png' });
        browser.close();
    });
}
exports.default = screenshot;
