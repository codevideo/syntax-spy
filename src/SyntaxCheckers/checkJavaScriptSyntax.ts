import vm from 'vm';

export const checkJavaScriptSyntax = (code: string) => {
    try {
        // Try to compile Script object (throws error from constructor if syntax is invalid)
        const script = new vm.Script(code);
        return true;
    } catch (error) {
        // TODO better error handling
        return false;
    }
}