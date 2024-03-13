# syntax-spy

Simultaneously detect and syntax check any code snippet with ease.

`syntax-spy` is a powerful TypeScript / JavaScript tool that combines the powers of [vscode-languagedetection
](https://github.com/microsoft/vscode-languagedetection), [ts-morph](https://github.com/dsherret/ts-morph), and a variety of other AST and linting tools to simultaneously identify and syntax check any snippet of code.

## Installation

```bash
npm install @fullstackcraftllc/syntax-spy
```

## Usage

```typescript
import { identifyAndValidateCode } from '@fullstackcraftllc/syntax-spy';

const code = `
// here's a comment in TypeScript
const testFunction = (someParam: string) => {
    const myStringArray: string[] = ['Hello', 'World'];
    console.log(someParam); 
    blahblahsomesyntaxerror
}
`;

async function main() {
    try {
        const { language, isValid, error } = await identifyAndValidateCode(code);
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Detected language:', language);
            console.log('Syntax is valid:', isValid);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
```

## TODOs

- Add support for more programming languages.