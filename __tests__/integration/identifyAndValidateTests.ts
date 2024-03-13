import {describe, expect, it} from '@jest/globals';
import { identifyAndValidate } from '../../src/identifyAndValidate';

describe('Integration Tests: identifyAndValidate', () => {
    it('should identify and validate TypeScript syntax correctly', async () => {
        const code = `
// here's a comment in TypeScript
const testFunction = (someParam: string) => {
    const myStringArray: string[] = ['Hello', 'World'];
    console.log(someParam); 
}`;
        const {language, isValid, error} = await identifyAndValidate(code);
        expect(language).toBe('TypeScript');
        expect(isValid).toBe(true);
        expect(error).toBeNull();
    });

    it('should identify TypeScript but return an error for invalid syntax', async () => {
        const code = `
// here's a comment in TypeScript
const testFunction = (someParam: string) => {
    const myStringArray: string[] = ['Hello', 'World'];
    console.log(someParam); 
    blahblahsomesyntaxerror
}`;
        const {language, isValid, error} = await identifyAndValidate(code);
        expect(language).toBe('TypeScript');
        expect(isValid).toBe(false);
        expect(error).toBeDefined();
    });

    it('should return null for language if its a strange language', async () => {
        const code = `
        glober ,,jork'' = [[someParam - { ++ } -`;
        const {language, isValid, error} = await identifyAndValidate(code);
        expect(language).toBe(null);
        expect(isValid).toBe(false);
        expect(error).toBeDefined();
    });

    it('should return an error for unsupported language', async () => {
        const code = `
        main :: IO ()
        main = putStrLn "Hello, World!"`;
        const {language, isValid, error} = await identifyAndValidate(code);
        expect(language).toBeNull();
        expect(isValid).toBe(false);
        expect(error).toBeDefined();
    });

    it('should return an error if language detection fails', async () => {        
        const code = 'console.log("Hello, world!");';
        const {language, isValid, error} = await identifyAndValidate(code);
        expect(language).toBeNull();
        expect(isValid).toBe(false);
        expect(error).toBeDefined();
    });

});