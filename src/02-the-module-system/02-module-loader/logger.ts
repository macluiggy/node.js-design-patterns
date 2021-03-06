export const log = (message: string) => console.log(message);

export default class Logger {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
    log(message: string) {
        console.log(`${this.name}: ${message}`);
    }
}