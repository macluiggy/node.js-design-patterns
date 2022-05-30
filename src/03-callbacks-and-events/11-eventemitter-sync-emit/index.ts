import { EventEmitter } from "stream";
import { readFileSync } from "fs";

class FindRegex extends EventEmitter {
  private regex: RegExp;
  private files: string[];
  constructor(regex: RegExp) {
    super();
    this.regex = regex;
    this.files = [];
  }

  addFile(file: string) {
    this.files.push(file);
    return this;
  }

  find() {
    for (const file of this.files) {
      // readFile(file, "utf8", (err, content) => {
      //   if (err) {
      //     this.emit("error", err);
      //     return;
      //   }
      //   this.emit("fileread", file);
      //   const match = content.match(this.regex);
      //   if (match) {
      //     match.forEach((elem) => this.emit("found", file, elem));
      //   }
      // });
      let content: string = ''
      try {
        content =  readFileSync(file, 'utf-8')
      } catch (err) {
        this.emit('error', err)
      }
      this.emit('fileread', file)
      const match = content.match(this.regex)
      if (match) match.forEach(elem => this.emit('found', file, elem))
      // if (match) match.forEach(elem => process.nextTick(() => this.emit('found', file, elem))) // se asegura que sea asincrono
    }
    return this;
  }
}

const findRegexInstance = new FindRegex(/hello \w+/g);
findRegexInstance
  .addFile("fileA.txt")
  .addFile("fileB.json")
  .addFile("j")
  // this listeners are invoked
  .on('found', (file, match) => console.log(`[Before] Matched "${match}"`))
  .on("error", (err) => console.error(`Error emitted ${err.message}`))
  .find()
  // this listeners are never invoked
  .on('found', (file, match) => console.log(`[After] Matched "${match}"`))
  .on("error", (err) => console.error(`Error emitted ${err.message}`));