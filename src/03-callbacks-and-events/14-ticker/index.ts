import EventEmitter from "events";

function ticker(limit: number | undefined, callback: Function) {
  const emitter = new EventEmitter();
  // emitter.emit("tick", limit);
  let e = 0;
  let i = setInterval(() => {
    emitter.emit("tick");
    e++;
    if (Date.now() % 5 === 0) {
      emitter.emit("error", "Event: timestamp is divisible by 5");
      return callback("Callback: timestamp is divisible by 5");
    }
  }, 50);
  setTimeout(() => {
    clearInterval(i);
    callback(null, `the event has been emitted ${e} times`);
  }, limit);
  return emitter;
}

ticker(1000, (err, msg) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(msg);
})
  .on("tick", () => console.log("tick"))
  .on("error", (err) => console.error(err))
  // .removeListener("tick", () => console.log("tick"))
  // .on("tick", () => console.log("oiesamamada"));
