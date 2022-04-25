export class ConsoleReport {
  constructor(public report: string) {}

  print(): void {
    console.log(this.report);
  }
}
