import { createRequire } from "module";

const require = createRequire(import.meta.url);

const dir = require('./filename.cjs')
console.log(dir);