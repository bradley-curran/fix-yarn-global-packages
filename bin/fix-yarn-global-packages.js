#!/usr/bin/env node
require('shelljs/global');
const path = require('path');

// confirm yarn is installed
if (!which('yarn')) {
  echo('yarn doesn\'t seem to be installed');
  exit(1);
}

// get the directory where yarn's global binaries are installed
const yarnFromBin = '~/.config/yarn/global/node_modules/.bin';

if (!test('-e', yarnFromBin)) {
  echo('couldn\'t find directory to get global binaries from');
}

// get the directory where yarn's global binaries should be installed
const yarnToBin = exec('yarn global bin', { silent: true }).trim();

if (!yarnToBin) {
  echo('couldn\'t find directory to install global binaries to');
  exit(1);
}

const items = ls(yarnFromBin);

for (item of items) {
  const from = path.join(yarnFromBin, item); 
  const to = path.join(yarnToBin, item);
  ln('-s', from, to);
  echo(`linked ${item}`);
}
