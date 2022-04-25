import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class MatchReader extends CsvFileReader<MatchData> {
  data: MatchData[] = [];

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      // type assertions
      row[5] as MatchResults, // 'H','A','D'
      row[6],
    ];
  }
}
