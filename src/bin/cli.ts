#!/usr/bin/env node

import { execSync } from 'child_process';

const runCommand = (command: string) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed to execute ${command}`, err);
    return false;
  }
  return true;
};
const reppoName = process.argv[2];
const gitCheckOut = `git clone  https://github.com/deformal/type-graphql-prisma ${reppoName}`;
const installDepsCommand = `cd${reppoName} $$ npm install`;
console.log(`Cloning the repository with name ${reppoName}`);
const checkOut = runCommand(gitCheckOut);
if (!checkOut) process.exit(-1);

console.log(`Installing dependencies for ${reppoName}}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);
console.log('Thank you for using tgp, template. Happy coding 🚀');
console.log(`cd ${reppoName} && yarn or npm install`);
