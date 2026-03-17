// common js to esm

import { a } from "./file_es2.mjs";
import { a as x } from "./file_es3.mjs";

import utils from "./utils_esm/index.mjs";

console.log(utils.add(5, 5));
console.log(utils.biyog(x, a));
console.log(a, x);
