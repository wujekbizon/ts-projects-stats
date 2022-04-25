"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = require("fs");
class HtmlReport {
    constructor(filename) {
        this.filename = filename;
    }
    print(report) {
        const html = `
    <div>
    <h1>Analysis Output</h1>
    <div>${report}</div>
    </div>
    `;
        (0, fs_1.writeFileSync)(this.filename, html);
    }
}
exports.HtmlReport = HtmlReport;
