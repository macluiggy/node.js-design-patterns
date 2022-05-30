import { readFile } from "fs";

function readJSONThrows(filename: string, callback: Function) {
  readFile(filename, "utf8", (err, data) => {
    let parsed;
    if (err) {
      //
      return callback(err);
    }

    // no hay errores, propaga los datos
    callback(null, JSON.parse(data));
  });
}

// readJSONThrows("invalid_json.json", (err) => console.error(err));
// readJSONThrows("data.txt", (err) => console.error(err));

try {
  readJSONThrows("invalid_json.json", (err) => console.error(err));
} catch (err) {
  console.log("This will NOT catch the JSON parsing exception");
}

process.on('uncaughtException', (err) => {
  console.error(`This will catch at last the JSON parsing exception: ${err.message}`)
  // Terminates the application with 1 (error) as exit code.
  // Without the following line, the application would continue
  process.exit(1)
})
