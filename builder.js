const { execSync } = require("child_process");
const { readFileSync, writeFileSync } = require("fs");
const path = require("path");


const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

const packageJsonPath = path.resolve(__dirname, `package.json`);

console.log("** Please wait! **");
console.log(`** Bundling [${process.env.STAGE}] stage... **`);

try {
  execSync(
    `rm -rf dist/${process.env.STAGE} && STAGE=${process.env.STAGE} webpack > builder-result`
  );

  if (process.env.STAGE === "production") {
    const packageJsonContent = JSON.parse(
      readFileSync(packageJsonPath, "utf-8")
    );

    delete packageJsonContent.devDependencies;
    delete packageJsonContent.scripts;

    packageJsonContent.scripts = {
      start: "STAGE=production node main.app.js",
    };

    writeFileSync(
      path.resolve(__dirname, `dist/${process.env.STAGE}/package.json`),
      JSON.stringify(packageJsonContent),
      {
        encoding: "utf-8",
      }
    );
  }

  execSync(`cp ./src/.env.${process.env.STAGE} ./dist/${process.env.STAGE}`);
} catch (error) {
  console.log(error);
} finally {
  const builderResult = readFileSync(
    path.resolve(__dirname, "builder-result"),
    "utf-8"
  );

  if (builderResult.includes("WARNING")) {
    console.log(
      `
    \`\`\`
    ${colors.yellow}WARNING!!!${colors.reset}
    `
    );
    console.log(
      `
    ${colors.red}There is a warning in the compilation result of your application. Please check the 'builder-result' to ensure if there is an error in your application. Please review it carefully and make necessary adjustments if needed to ensure the security and optimal functioning of your application.${colors.reset}
    `
    );
  } else {
    execSync(`rm ${path.resolve(__dirname, "builder-result")}`);
  }

  console.log(
    `
    \`\`\`
    => The application bundling process has been ${colors.green}successfully completed.${colors.reset}
    => You can see the result in the "dist/${process.env.STAGE}" directory.
    `
  );
}
