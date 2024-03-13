import { Project } from "ts-morph"

// Function to check TypeScript syntax
export const checkTypeScriptSyntax = (code: string): boolean => {
    const project = new Project();
    const sourceFile = project.createSourceFile("temp.ts", code);
    const diagnostics = sourceFile.getPreEmitDiagnostics();
    return diagnostics.length === 0;
}