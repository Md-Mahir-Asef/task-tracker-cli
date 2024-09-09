#!/usr/bin/env node
const add = require("./utilities/add");
const update = require("./utilities/update");
const deleteTask = require("./utilities/delete");
const mark = require("./utilities/mark");
const list = require("./utilities/list");
const args = process.argv;

list(args);
add(args);
update(args);
deleteTask(args);
mark(args);
