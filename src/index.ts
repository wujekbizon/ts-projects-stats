import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWinn) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games in season 2018/2019`);
