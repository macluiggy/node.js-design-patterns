import { readFile } from "fs";

readFile('data.txt', 'utf8', (err, data) => {
  console.log(`First call data: ${data}`);
})