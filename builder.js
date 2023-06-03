const fs = require("fs");
const { execSync } = require("child_process");

console.log("Please wait!");
console.log(`Bundling [${process.env.STAGE}] stage...`);

try {
  execSync(`rm -rf dist/${process.env.STAGE} && STAGE=${process.env.STAGE} webpack`);
  execSync(`cp ./package.json ./dist/${process.env.STAGE}`);
  execSync(`cp ./src/.env.${process.env.STAGE} ./dist/${process.env.STAGE}`);

  // Read the contents of package.json file
  const packageJsonPath = `./dist/${process.env.STAGE}/package.json`;
  const packageJson = require(packageJsonPath);

  // Remove specific devDependencies from package.json
  delete packageJson.devDependencies;
  delete packageJson.scripts;

  packageJson.scripts = {
    start: `STAGE=${process.env.STAGE} node app.js`,
  };

  // Save the changes to package.json file
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log(
    `
    [devDependencies have been removed from package.json]
    `
  );
} catch (error) {
  console.log(error);
} finally {
  console.log(
    `
    Run 'yarn install' or 'npm install' for installing production depedencies!
    ===================================================================
    Please, run command 'yarn start' or 'npm start' to running this App!
    ===================================================================
    Cheers :D
    
    `
  );
}
