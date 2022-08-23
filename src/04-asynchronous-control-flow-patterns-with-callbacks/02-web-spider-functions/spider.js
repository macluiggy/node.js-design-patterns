import fs from "fs";
import path from "path";
import superagent from "superagent";
import mkdirp from "mkdirp";
import { urlToFilename } from "./utils.js";

const saveFile = (filename, contents, cb) => {
  mkdirp(path.dirname(filename), (err) => {
    if (err) {
      return cb(err);
    }
    fs.writeFile(filename, contents, cb);
  });
};

const download = (url, filename, cb) => {
  console.log(`Downloading ${url}`);
  superagent.get(url).end((err, res) => {
    if (err) {
      return cb(err);
    }
    saveFile(filename, res.text, (err) => {
      if (err) {
        return cb(err);
      }
      console.log(`Downloaded and saved: ${url}`);
      cb(null, res.text);
    });
  });
};

export function spider(url, cb) {
  const filename = urlToFilename(url);
  fs.access(filename, (err) => {
    if (!err && err.code !== "ENOENT") {
      return download(url, filename, cb);
    }
    download(url, filename, (err) => {
      if (err) {
        return cb(err);
      }
      console.log(`Already downloaded: ${url}`);
      cb(null, res.text, false);
    });
  });
}
