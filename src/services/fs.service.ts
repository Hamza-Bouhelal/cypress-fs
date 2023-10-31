import fs from "fs";
import {
  CreateDirOptions,
  DeleteDirOptions,
  ReadFileOptions,
  ReadDirOptions,
} from "../types";

export const fileSystemMethods = {
  fsFileExists: (path: string) => {
    try {
      return fs.existsSync(path) || null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsReadFile({ path, options }: { path: string; options?: ReadFileOptions }) {
    try {
      return fs.readFileSync(path, options) || null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsWriteFile({
    path,
    content,
    options,
  }: {
    path: string;
    content: string;
    options?: fs.WriteFileOptions;
  }) {
    try {
      fs.writeFileSync(path, content, options);
      return null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },

  fsDeleteFile: (path: string) => {
    try {
      fs.unlinkSync(path);
      return null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsCreateDirectory: ({
    path,
    fileOptions,
  }: {
    path: string;
    fileOptions?: CreateDirOptions;
  }) => {
    try {
      fs.mkdirSync(path, fileOptions);
      return null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsDeleteDirectory: ({
    path,
    fileOptions,
  }: {
    path: string;
    fileOptions?: DeleteDirOptions;
  }) => {
    try {
      fs.rmdirSync(path, fileOptions);
      return null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsCopyFile: ({
    path,
    newPath,
    mode,
  }: {
    path: string;
    newPath: string;
    mode?: number;
  }) => {
    try {
      fs.copyFileSync(path, newPath, mode);
      return null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsChmod({ path, mode }: { path: string; mode: number }) {
    try {
      fs.chmodSync(path, mode);
      return null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsAppendFile({
    path,
    content,
    options,
  }: {
    path: string;
    content: string;
    options?: fs.WriteFileOptions;
  }) {
    try {
      fs.appendFileSync(path, content, options);
      return null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsRename({ path, newPath }: { path: string; newPath: string }) {
    try {
      fs.renameSync(path, newPath);
      return null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsDirExists(path: string) {
    try {
      return fs.existsSync(path) || null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsReadDir({ path, options }: { path: string; options?: ReadDirOptions }) {
    try {
      return fs.readdirSync(path, options) || null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsIsDirectory(path: string) {
    try {
      return fs.lstatSync(path).isDirectory() || null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
  fsIsFile(path: string) {
    try {
      return fs.lstatSync(path).isFile() || null;
    } catch (err) {
      throw new Error(`Cypress-fs Error: ${err}`);
    }
  },
};
