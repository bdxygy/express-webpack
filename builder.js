const { execSync } = require("child_process");

console.log("** Please wait! **");
console.log(`** Bundling [${process.env.STAGE}] stage... **`);

try {
  execSync(
    `rm -rf dist/${process.env.STAGE} && STAGE=${process.env.STAGE} webpack`
  );
  execSync(`cp ./src/.env.${process.env.STAGE} ./dist/${process.env.STAGE}`);
} catch (error) {
  console.log(error);
} finally {
  console.log(
    `
    => The application bundling process has been successfully completed.     
    => You can run the result in the "dist/${process.env.STAGE}" directory.  
    => Execute the terminal command "STAGE=${process.env.STAGE} node ./dist/${process.env.STAGE}/main.app.js" to run your application.
  `
  );
}
