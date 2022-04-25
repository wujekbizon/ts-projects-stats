"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = void 0;
class ConsoleReport {
    constructor(report) {
        this.report = report;
    }
    print() {
        console.log(this.report);
    }
}
exports.ConsoleReport = ConsoleReport;
