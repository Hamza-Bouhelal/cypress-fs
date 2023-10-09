import * as fst from "../types";
import fs from "fs";

const getValue = () => {
    const value = Cypress.env("cypress-fs-temp-env");
    Cypress.env("cypress-fs-temp-env", null);
    return value;
};

const setValue = (value: any) => {
    Cypress.env("cypress-fs-temp-env", value);
};

export function fsExistsSync(path: string) {
    cy.task<boolean>("fsFileExists", path, { log: false }).then(setValue);
    return getValue();
}

export function fsReadFile(path: string, options?: any) {
    cy.task("fsReadFile", { path, options }, { log: false }).then(setValue);
    return getValue();
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

export const fsDirExists = (path: string) => {
    cy.task<boolean>("fsDirExists", path, { log: false }).then(setValue);
    return getValue();
};

export const fsReadDir = (path: string, options?: fst.ReadDirOptions) => {
    cy.task("fsReadDir", { path, options }, { log: false }).then(setValue);
    return getValue();
};

export const fsIsDirectory = (path: string) => {
    cy.task("fsIsDirectory", path, { log: false }).then(setValue);
    return getValue();
}

export const fsIsFile = (path: string) => {
    cy.task("fsIsFile", path, { log: false }).then(setValue);
    return getValue();
}
