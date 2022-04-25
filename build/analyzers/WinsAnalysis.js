"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === MatchResult_1.MatchResults.HomeWin) {
                wins++;
            }
            else if (match[2] === this.teamName &&
                match[5] === MatchResult_1.MatchResults.AwayWinn) {
                wins++;
            }
        }
        return `Team ${this.teamName} won ${wins} games in season 2018/2019`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
