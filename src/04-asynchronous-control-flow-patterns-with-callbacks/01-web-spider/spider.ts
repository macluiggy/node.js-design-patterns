import fs from "fs";
import path from "path";
import superagent from "superagent";
import mkdirp, { Mode, Options } from "mkdirp";
import { urlToFilename } from "./utils";

export function spider(url: string, cb: Function): void {
  const filename = urlToFilename(url);
  fs.access(filename, (err) => {
    if (err && err.code === "ENOENT") {
      console.log(`Downloading ${url} into ${filename}`);
      superagent.get(url).end((err, res) => {
        if (err) {
          cb(err);
        } else {
          mkdirp(path.dirname(filename), { mode: 0o777 });
        }
      });
    } else {
      cb(null, filename, false);
    }
  });
}
