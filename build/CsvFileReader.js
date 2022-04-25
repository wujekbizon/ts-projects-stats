"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = require("fs");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        // data type annotation will be an array of tuples
        this.data = [];
    }
    read() {
        this.data = (0, fs_1.readFileSync)(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            // taking in an array of strings and do some conversion proccess
            // sticking in to an array an return
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
