import Logger, { log } from "./logger";

log("Hello from module1");
const logger = new Logger("Default");
logger.log("Hello from module1");

// const log = console.log

let a = {
  default: "a",
}

const {default:b} = a;
log(b);