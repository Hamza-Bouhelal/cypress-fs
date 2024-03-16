import * as fst from "../types";
import fs from "fs";

const getValue = function <T = unknown>(cb: () => Cypress.Chainable<T>): T {
  let value;
  cb().then((val) => {
    value = val;
  });
  return value as T;
};

export function fsExistsSync(path: string) {
  return getValue(() => cy.task<boolean>("fsFileExists", path, { log: false }));
}

export function fsReadFile(path: string, options?: any) {
  return getValue(() =>
    cy.task("fsReadFile", { path, options }, { log: false })
  );
}

export function fsWriteFile(
  path: string,
  content: string,
  options: fs.WriteFileOptions
) {
  cy.task("fsWriteFile", { path, content, options }, { log: false });
}

export function fsDeleteFile(path: string) {
  cy.task("fsDeleteFile", path, { log: false });
}

export function fsCreateDirectory(
  path: string,
  fileOptions?: fst.CreateDirOptions
) {
  cy.task("fsCreateDirectory", { path, fileOptions }, { log: false });
}

export function fsDeleteDirectory(
  path: string,
  fileOptions?: fst.DeleteDirOptions
) {
  cy.task("fsDeleteDirectory", { path, fileOptions }, { log: false });
}

export const fsCopyFile = ({
  path,
  newPath,
  mode,
}: {
  path: string;
  newPath: string;
  mode?: number;
}) => {
  cy.task("fsCopyFile", { path, newPath, mode }, { log: false });
};

export const fsChmod = ({ path, mode }: { path: string; mode: number }) => {
  cy.task("fsChmod", { path, mode }, { log: false });
};

export const fsAppendFile = ({
  path,
  content,
}: {
  path: string;
  content: string;
}) => {
  cy.task("fsAppendFile", { path, content }, { log: false });
};

export const fsRename = ({
  path,
  newPath,
}: {
  path: string;
  newPath: string;
}) => {
  cy.task("fsRename", { path, newPath }, { log: false });
};

export const fsDirExists = (path: string): boolean => {
  return getValue(() => cy.task<boolean>("fsDirExists", path, { log: false }));
};

export const fsReadDir = (
  path: string,
  options?: fst.ReadDirOptions
): string[] => {
  return getValue(() =>
    cy.task("fsReadDir", { path, options }, { log: false })
  );
};

export const fsIsDirectory = (path: string) => {
  return getValue(() =>
    cy.task<boolean>("fsIsDirectory", path, { log: false })
  );
};

export const fsIsFile = (path: string) => {
  return getValue(() => cy.task("fsIsFile", path, { log: false }));
};
