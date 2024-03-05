import analyse from "linguist-js";
import { Project } from "ts-morph"

// Function to check TypeScript syntax
export const checkTypeScriptSyntax = (code: string) => {
    const project = new Project();
    const sourceFile = project.createSourceFile("temp.ts", code);
    const diagnostics = sourceFile.getPreEmitDiagnostics();
    return diagnostics.length === 0;
}

// Function to identify the language and validate syntax
export const identifyAndValidate = async (code: string) => {
    try {
        // Detect language
        const results = await analyse(code);
        const languageResults = results.files.results;

        // Get first language detected
        const language = Object.keys(results.files.results)[0];
        
        // Validate syntax based on language
        let isValid = false;
        switch (language) {
            case "TypeScript":
                isValid = checkTypeScriptSyntax(code);
                break;
            // TODO: Add cases for other languages as needed
            default:
                // If language is not supported, return error
                return { language: null, isValid: false, error: `Language ${language} is not supported. Create an issue or pull request: https://github.com/codevideo/syntax-spy` };
        }
        
        return { language, isValid, error: null };
    } catch (error) {
        // Return error if language detection fails
        return { language: null, isValid: false, error };
    }
}

