import { readFileSync } from "fs";

const cache = new Map();

function consistentReadSync(filename: string) {
  if (cache.has(filename)) {
    // invoked synchronously
    console.log("synchronous");

    return cache.get(filename);
  } else {
    // invoked synchronously
    const data = readFileSync(filename, "utf8");

    cache.set(filename, data);
    console.log("asynchronous");

    return data;
  }
}

console.log(consistentReadSync('data.txt'))
// the next call will read from the cache
console.log(consistentReadSync('data.txt'))
