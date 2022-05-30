import { EventEmitter } from "events";
import { readFile } from "fs";

function findRegex(files: string[], regex: RegExp) {
  const emmitter = new EventEmitter();
  for (const file of files) {
    readFile(file, "utf8", (err, content) => {
      if (err) {
        emmitter.emit("error", err);
        return;
      }
      emmitter.emit("fileread", file);
      const match = content.match(regex);
      if (match) {
        match.forEach((elem) => emmitter.emit("found", file, elem));
      }
    });
  }
  return emmitter;
}

findRegex(["fileA.txt", "fileB.json", 'j'], /hello \w+/g)
  .on("fileread", (file) => console.log(`${file} was read`))
  .on("found", (file, match) => console.log(`Matched ${match} in ${file}`))
  .on('error', (err) => console.error(`Error emitted ${err}`)); // siempre es recomendable emitir el evento error por si llega a pasar un error
