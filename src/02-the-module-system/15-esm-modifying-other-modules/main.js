import * as fs from "fs";
// import  fs, {readFile} from "fs";
import { mockEnable, mockDisable } from "./mock-read-file.js";
import {syncBuiltinESMExports} from 'module'

mockEnable(Buffer.from("Hello, world!"));
syncBuiltinESMExports() // permite que se actualizen los exports de un modulo, incluso los named exports

fsreadFile('fake-path', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(data.toString());
})

mockDisable();
