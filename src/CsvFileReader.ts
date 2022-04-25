import { readFileSync } from 'fs';
import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResult';

// define new type
type MatchData = [Date, string, string, number, number, MatchResults, string];

export class CsvFileReader {
  // data type annotation will be an array of tuples
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = readFileSync(this.filename, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      // taking in an array of strings and do some conversion proccess
      // sticking in to an array an return
      .map((row: string[]): MatchData => {
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
      });
  }
}
