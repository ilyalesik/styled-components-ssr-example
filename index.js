'use strict';

var fs = require('fs');

var babelrc = fs.readFileSync('./.babelrc');
var config;

try {
    config = JSON.parse(babelrc);
} catch (err) {
    console.error('==>     ERROR: Error parsing your .babelrc.');
    console.error(err);
}

require('babel-core/register')(config);
require('babel-polyfill');
require('./src/server');