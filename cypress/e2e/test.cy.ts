it("Commands returning output", () => {
  const dir = "./cypress/e2e";
  const filePath = `${dir}/test.cy.ts`;
  cy.fsReadFile(filePath, { encoding: "utf8" as null }).should("contain", dir);
  cy.fsFileExists(filePath).should("eq", true);
  cy.fsDirExists(dir).should("eq", true);
  cy.fsReadDir(dir).should("contain", "test.cy.ts");
  cy.fsIsDirectory(dir).should("eq", true);
  cy.fsIsFile(filePath).should("eq", true);
});
