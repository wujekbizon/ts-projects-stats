import { readFileSync } from 'fs';

export abstract class CsvFileReader<T> {
  // data type annotation will be an array of tuples
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

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
      .map(this.mapRow);
  }
}
