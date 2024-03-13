
import { ModelOperations } from "@vscode/vscode-languagedetection";
import { mapLanguageIdToLanguageName } from "./mapLanguageIdToLanguageName";
import { checkJavaScriptSyntax } from "./SyntaxCheckers/checkJavaScriptSyntax";
import { checkTypeScriptSyntax } from "./SyntaxCheckers/checkTypeScriptSyntax";

const modelOperations = new ModelOperations();

// Function to identify the language and validate syntax
export const identifyAndValidate = async (code: string) => {
    try {
        // for now a work around - create a temp file, no extension
        const results = await modelOperations.runModel(code);

        console.log(results)

        if (results.length === 0) {
            return { language: null, isValid: false, error: `No language detected` };
        }

        // Get first language detected
        const languageId = results[0].languageId;
        const languageName = mapLanguageIdToLanguageName(languageId);
        
        // Validate syntax based on language
        let isValid = false;
        switch (languageName) {
            case "TypeScript":
                isValid = checkTypeScriptSyntax(code);
                break;
            case "JavaScript":
                isValid = checkJavaScriptSyntax(code);
            // TODO: Add cases for other languages as needed
            default:
                // If language is not supported, return error
                return { language: null, isValid: false, error: `Language ${languageName} is not yet supported for syntax checks. Create an issue or pull request: https://github.com/codevideo/syntax-spy` };
        }
        
        return { language: languageName, isValid, error: null };
    } catch (error) {
        // Return error if language detection fails
        return { language: null, isValid: false, error };
    }
}

