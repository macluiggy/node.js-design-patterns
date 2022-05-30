import { readFile } from "fs";

function readJson(filename: string, callback: Function) {
  readFile(filename, "utf8", (err, data) => {
    let parsed;
    if (err) {
      //
      return callback(err);
    }

    try {
      parsed = JSON.parse(data);
    } catch (err) {
      // captura el error de parseo
      return callback(err);
    }
    // no hay errores, propaga los datos
    callback(null, parsed);
  });
}

readJson("invalid_json.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

readJson("valid_json.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});