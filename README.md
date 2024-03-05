# syntax-spy

Simultaneously detect and syntax check any code snippet with ease.

`syntax-spy` is a powerful TypeScript / JavaScript tool that combines the powers of [Linguist](https://github.com/github/linguist), [linguist-js](https://github.com/wchargin/linguist-js), [ts-morph](https://github.com/dsherret/ts-morph), and a variety of other AST and linting tools to simultaneously identify and syntax check any snippet of code.

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

- Write unit tests for a variety of programming languages and syntax errors.
- Check rollup config, build, and publish to NPM.
- Add this tool to the [codevideo.io](https://cdoevideo.io) website as a tool within the CodeVideo cohort.
- Actually use in `codevideo-ai` repo.