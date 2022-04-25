import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResult';
import { MatchReader } from './MatchReader';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'Data Reader' interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWinn) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games in season 2018/2019`);
