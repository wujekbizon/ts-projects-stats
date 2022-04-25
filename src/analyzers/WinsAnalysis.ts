import { MatchData } from '../MatchData';
import { MatchResults } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
        wins++;
      } else if (
        match[2] === 'Man United' &&
        match[5] === MatchResults.AwayWinn
      ) {
        wins++;
      }
    }
    return `Team ${this.teamName} won ${wins} games in season 2018/2019`;
  }
}
