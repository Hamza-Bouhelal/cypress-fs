const fs = require("fs");
const path = require("path");
const packageJson = require("../package.json");
const { execSync } = require('child_process');

execSync('yarn tsc', { encoding: 'utf-8' });

const newPackage = {
  ...packageJson,
  main: "./support.js",
  typings: "./index.d.ts",
};

fs.writeFileSync(
  path.resolve(__dirname, "..", "dist", "package.json"),
  JSON.stringify(newPackage, null, 2)
);

fs.copyFileSync(
  path.resolve(__dirname, "..", "src", "index.d.ts"),
  path.resolve(__dirname, "..", "dist", "index.d.ts")
);

fs.copyFileSync(
  path.resolve(__dirname, "..", ".npmrc"),
  path.resolve(__dirname, "..", "dist", ".npmrc")
);

fs.copyFileSync(
  path.resolve(__dirname, "..", "README.md"),
  path.resolve(__dirname, "..", "dist", "README.md")
);

fs.copyFileSync(
  path.resolve(__dirname, "..", "LICENSE"),
  path.resolve(__dirname, "..", "dist", "LICENSE")
);
