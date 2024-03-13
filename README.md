# syntax-spy

Simultaneously detect and syntax check any code snippet with ease.

`syntax-spy` is a powerful TypeScript / JavaScript tool that combines the powers of [vscode-languagedetection
](https://github.com/microsoft/vscode-languagedetection), [ts-morph](https://github.com/dsherret/ts-morph), and a variety of other AST and linting tools to simultaneously identify and syntax check any snippet of code.

## Features

- Language detection: Automatically detect the programming language of a given code snippet.
- Syntax checking: Utilize AST and linting tools to check the syntax validity of the detected language.
- Wide language support: Support for various programming languages including TypeScript, JavaScript, Python, C#, and more.
- Easy to use: Simple integration into Node.js applications.

## Installation

```bash
npm install syntax-spy
```

## Usage

```typescript
import { identifyAndValidateCode } from 'syntax-spy';

const code = `
function add(a, b) {
    return a + b;
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