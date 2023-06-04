import { Compilation, Compiler } from "webpack";
import javascriptObfuscator from "javascript-obfuscator";
import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

const pluginName = "ObfuscatorCode";

export class ObfuscatorCode {
  apply(compiler: Compiler) {
    compiler.hooks.afterEmit.tap(pluginName, (compilation: Compilation) => {
      if (
        !(compilation.options.mode === "production") &&
        (compilation.outputOptions.filename as string).endsWith("js")
      )
        return compilation;

      const compilationFiles = Array.from(compilation.assetsInfo.keys());

      for (let fileName of compilationFiles) {
        const pathFile = `${compilation.outputOptions.path}/${fileName}`;
        const code = readFileSync(pathFile, { encoding: "utf-8" });

        const obfuscationCode = javascriptObfuscator
          .obfuscate(code, {
            renameGlobals: true,
            compact: true,
            controlFlowFlattening: true,
            target: "node",
            transformObjectKeys: true,
          })
          .getObfuscatedCode();

        writeFileSync(pathFile, obfuscationCode, "utf-8");

        execSync(
          `terser ${pathFile} --mangle --compress -o ${
            compilation.outputOptions.path
          }/${fileName.split(".")[0]}.js`
        );

        execSync(
          `rm ${compilation.outputOptions.path}/${fileName} && mv ${
            compilation.outputOptions.path
          }/${fileName.split(".")[0]}.js ${
            compilation.outputOptions.path
          }/${fileName}`
        );
      }
    });
  }
}
