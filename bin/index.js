const add = require("./utilities/add");
const update = require("./utilities/update");
const args = process.argv;

add(args);
update(args);

console.log("Task has done.");