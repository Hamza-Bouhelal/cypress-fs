import * as cfs from "./commands/fileSystemCommands";

Cypress.Commands.add("fsWriteFile", cfs.fsWriteFile);

Cypress.Commands.add("fsDeleteFile", cfs.fsDeleteFile);

Cypress.Commands.add("fsCreateDirectory", cfs.fsCreateDirectory);

Cypress.Commands.add("fsDeleteDirectory", cfs.fsDeleteDirectory);

Cypress.Commands.add("fsCopyFile", cfs.fsCopyFile);

Cypress.Commands.add("fsChmod", cfs.fsChmod);

Cypress.Commands.add("fsAppendFile", cfs.fsAppendFile);

Cypress.Commands.add("fsRename", cfs.fsRename);

Cypress.Commands.add("fsFileExists", cfs.fsExistsSync);

Cypress.Commands.add("fsReadFile", cfs.fsReadFile);

Cypress.Commands.add("fsDirExists", cfs.fsDirExists);

Cypress.Commands.add("fsReadDir", cfs.fsReadDir);

Cypress.Commands.add("fsIsDirectory", cfs.fsIsDirectory);

Cypress.Commands.add("fsIsFile", cfs.fsIsFile);
