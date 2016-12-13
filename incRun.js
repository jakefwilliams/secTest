#!/usr/bin/env node

'use strict';

const co = require('co');

co(function*() {
	readFile("test.asp").then(function(contents) {
	  console.log(contents);
	});
});

