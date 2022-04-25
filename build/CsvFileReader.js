"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = require("fs");
const utils_1 = require("./utils");
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
            .map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // type assertions
                row[5],
                row[6],
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
