/// <reference types="node" />
import { writeFile } from 'node:fs';

import { config } from './config.js';

const output = process.argv[2];

writeFile(output, config.stringify(), (err: unknown) => {
  if (err) {
    console.error(err);
  }
});
