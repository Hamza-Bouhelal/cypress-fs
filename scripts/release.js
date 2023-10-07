const fs = require("fs-extra");
const path = require("path");
const packageJson = require("../package.json");
import { execSync } from "child_process";

const VersionUpdateType = {
  patch: 'patch',
  minor: 'minor',
  major: 'major'
}

const versionUpdateType = (message) => {
  return message.startsWith('fix') ? VersionUpdateType.patch : message.startsWith('feat') ? VersionUpdateType.minor : message.startsWith('perf') ? VersionUpdateType.major : VersionUpdateType.patch;
}

const commitMessage = process.argv[2];

if (!commitMessage) {
  console.log('Commit message wasn\'t passed down.');
  process.exit(1);
}

const newPackage = {
  ...packageJson,
  main: "./support.js",
  typings: "./index.d.ts",
};

fs.outputFileSync(
  path.resolve(__dirname, "..", "dist", "package.json"),
  JSON.stringify(newPackage, null, 2)
);

fs.copy(
  path.resolve(__dirname, "..", "src", "index.d.ts"),
  path.resolve(__dirname, "..", "dist", "index.d.ts")
);

const versionUpdate = versionUpdateType(commitMessage);
const NEW_VERSION = execSync(`npm version ${versionUpdate} --force`, { encoding: 'utf-8' });

console.log(`Releasing package cypress-fs@${NEW_VERSION}`);

execSync('cd dist && npm publish --access public --registry https://registry.npmjs.org/');

console.log('Released successfully! \n Pushing to git...');

execSync([
  'git remote remove origin',
  'git remote add origin https://bouhelalhamza:${GITLAB_TOKEN}@gitlab.com/packages3525740/cypress-fs.git',
  'git push origin HEAD:main -o ci.skip'
].join(' && '), { encoding: 'utf-8' });