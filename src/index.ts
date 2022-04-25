import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResult';
import { MatchReader } from './MatchReader';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'Data Reader' interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();
