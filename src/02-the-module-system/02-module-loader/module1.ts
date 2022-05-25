import { log, Logger } from "./logger";

log("Hello from module1");
const logger = new Logger("Default");
logger.log("Hello from module1");

// const log = console.log
