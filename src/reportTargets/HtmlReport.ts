import { writeFileSync } from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  constructor(public filename: string) {}
  print(report: string): void {
    const html = `
    <div>
    <h1>Analysis Output</h1>
    <div>${report}</div>
    </div>
    `;

    writeFileSync(this.filename, html);
  }
}
