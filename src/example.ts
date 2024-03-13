import { identifyAndValidate } from "./identifyAndValidate";

const example = async () => {
    const code = `
const testFunction = (someString: string, someInt: number) => { 
    console.log(someString);
    var add = someInt + 1;
}`
    const {language, isValid, error} = await identifyAndValidate(code);
    console.log(language, isValid, error);
}
example();