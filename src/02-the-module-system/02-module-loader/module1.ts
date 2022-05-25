import Logger, { log } from "./logger";

log("Hello from module1");
const logger = new Logger("Luiggy");
logger.log("Hello from module1");

let name = 'Luiggy'
// const log = console.log

if (logger.name === name) {
    
    import('./logger')
}