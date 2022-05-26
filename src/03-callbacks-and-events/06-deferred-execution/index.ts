/* eslint handle-callback-err: 0 */
import { readFile } from "fs";

const cache = new Map();

async function inconsistentRead(filename: string, cb: Function) {
  if (cache.has(filename)) {
    // invoked asynchronously
    // deferred callback invocation
    console.log("synchronous");

    process.nextTick(() => cb(cache.get(filename)))
  } else {
    // invoked asynchronously
    readFile(filename, "utf8", (err, data) => {
      console.log("asynchronous");

      cache.set(filename, data);
      cb(data);
    });
  }
}

function createFileReader(filename) {
  const listeners: any = [];
  inconsistentRead(filename, (value) => {
    listeners.forEach((listener) => {
      listener(value);
      // console.log(listener, value);
    });
  });
  // console.log(listeners);

  return {
    onDataReady: (listener) => listeners.push(listener),
  };
}

const reader1 = createFileReader("data.txt");
reader1.onDataReady((data) => {
  console.log(`First call data: ${data}`);

  // ...sometime later we try to read again from
  // the same file
  const reader2 = createFileReader("data.txt");
  reader2.onDataReady((data) => {
    console.log(`Second call data: ${data}`);
  });
});
