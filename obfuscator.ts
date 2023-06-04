import { Compilation, Compiler } from "webpack";
import javascriptObfuscator from "javascript-obfuscator";
import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

const pluginName = "ObfuscatorCode";
const tempFileName = "ObfuscatedFile.js";

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
        const pathTempFile = `${compilation.outputOptions.path}/${tempFileName}`
        const code = readFileSync(pathFile, { encoding: "utf-8" });

        const obfuscationCode = javascriptObfuscator
          .obfuscate(code, {
            renameGlobals: true,
            compact: true,
            target: "node",
            transformObjectKeys: true,
            stringArray: true,
            identifierNamesGenerator: "mangled-shuffled",
            stringArrayEncoding: ["rc4"],
            splitStrings: true,
            splitStringsChunkLength: 3
          })
          .getObfuscatedCode();

        writeFileSync(pathFile, obfuscationCode, "utf-8");

        execSync(
          `terser ${pathFile} --mangle --compress --toplevel --ecma 2015 -o ${pathTempFile}`
        );

        execSync(
          `rm ${pathFile} && mv ${pathTempFile} ${pathFile}`
        );
      }
    });
  }
}
