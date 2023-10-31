import * as cfs from "./commands/fileSystemCommands";
import * as fst from "./types";
import { ReadFileOptions } from "./types";
import fs from "fs";

Cypress.Commands.add("fsFileExists", (path: string) => {
  return cfs.fsExistsSync(path);
});

Cypress.Commands.add(
  "fsReadFile",
  (path: string, options?: ReadFileOptions) => {
    return cfs.fsReadFile(path, options);
  }
);

Cypress.Commands.add(
  "fsWriteFile",
  (path: string, content: string, options: fs.WriteFileOptions) => {
    return cfs.fsWriteFile(path, content, options);
  }
);

Cypress.Commands.add("fsDeleteFile", (path: string) => {
  return cfs.fsDeleteFile(path);
});

Cypress.Commands.add(
  "fsCreateDirectory",
  (path: string, fileOptions?: fst.CreateDirOptions) => {
    return cfs.fsCreateDirectory(path, fileOptions);
  }
);

Cypress.Commands.add(
  "fsDeleteDirectory",
  (path: string, fileOptions?: fst.DeleteDirOptions) => {
    return cfs.fsDeleteDirectory(path, fileOptions);
  }
);

Cypress.Commands.add(
  "fsCopyFile",
  ({
    path,
    newPath,
    mode,
  }: {
    path: string;
    newPath: string;
    mode?: number;
  }) => {
    return cfs.fsCopyFile({ path, newPath, mode });
  }
);

Cypress.Commands.add(
  "fsChmod",
  ({ path, mode }: { path: string; mode: number }) => {
    return cfs.fsChmod({ path, mode });
  }
);

Cypress.Commands.add(
  "fsAppendFile",
  ({ path, content }: { path: string; content: string }) => {
    return cfs.fsAppendFile({ path, content });
  }
);

Cypress.Commands.add(
  "fsRename",
  ({ path, newPath }: { path: string; newPath: string }) => {
    return cfs.fsRename({ path, newPath });
  }
);

Cypress.Commands.add("fsDirExists", (path: string) => {
  return cfs.fsDirExists(path);
});

Cypress.Commands.add(
  "fsReadDir",
  (path: string, options?: fst.ReadDirOptions) => {
    return cfs.fsReadDir(path, options);
  }
);

Cypress.Commands.add("fsIsDirectory", (path: string) => {
  return cfs.fsIsDirectory(path);
});

Cypress.Commands.add("fsIsFile", (path: string) => {
  return cfs.fsIsFile(path);
});
