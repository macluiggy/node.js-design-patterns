import { EventEmitter } from "stream";
import { readFile } from "fs";

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
      readFile(file, "utf8", (err, content) => {
        if (err) {
          this.emit("error", err);
          return;
        }
        this.emit("fileread", file);
        const match = content.match(this.regex);
        if (match) {
          match.forEach((elem) => this.emit("found", file, elem));
        }
      });
    }
    return this;
  }
}

const findRegexInstance = new FindRegex(/hello \w+/g);
findRegexInstance
  .addFile("fileA.txt")
  .addFile("fileB.json")
  .addFile("j")
  .find()
  .on("found", (file, match) => console.log(`Matched ${match} in ${file}`))
  .on("error", (err) => console.error(`Error emitted ${err.message}`));
