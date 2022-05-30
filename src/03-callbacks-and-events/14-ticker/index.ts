import EventEmitter from "events";

function ticker(limit?: number | undefined, callback?: () => void) {
  let delay = 50
  let i = 1
  const emitter = new EventEmitter();
  let interval = setInterval(() => {
    if (i > delay) clearInterval(interval)
    emitter.emit("tick")
    i++
  },  50)
  return emitter;
}

ticker(100).on("tick", () => console.log("tick"));