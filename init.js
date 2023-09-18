#! /usr/bin/env node

import fs from "fs";
import path from "path";

const cwd = process.cwd();

const files = [{
  path: 'tsconfig.json',
  contents: JSON.stringify({
    extends: '@smeijer/tsconfig',
    include: ['./src/**/*'],
    compilerOptions: {
      outDir: './dist',
      rootDir: './src',
      paths: {
          '~': ['./src']
      },
    }
  }, null, '\t'),
}, {
  path: 'tsconfig.build.json',
  contents: JSON.stringify({
    extends: './tsconfig.json',
    exclude: ['./src/**/*.test.ts']
  }, null, '\t'),
}];



for (const file of files) {
  if (!fs.existsSync(path.join(cwd, file.path))) continue;
  console.log(`${file.path} already exists`);
  process.exit(1);
}

for (const file of files) {
  fs.writeFileSync(path.join(cwd, file.path), file.contents, 'utf-8');
  console.log(`created ${file.path}`);
}
