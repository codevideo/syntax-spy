export type LanguageNames = 'TypeScript' | 'JavaScript' | 'C' | 'Lua' | 'C++' | 'C#' | 'Objective-C++' | 'HTML' | 'SQL' | 'Swift' | 'Perl' | 'Markdown' | 'Java' | 'PowerShell' | 'PHP' | 'Go' | 'LaTex' | 'Scala' | 'Python' | 'R' | 'MATLAB' | 'CSS' | 'Shell' | 'IPython Notebook' | 'Batch' | 'Haskell' | 'Erlang' | 'CoffeeScript' | 'Ruby';

export const mapLanguageIdToLanguageName = (languageId: string) => {
  switch (languageId) {
    case "ts":
      return "TypeScript";
    case "rs":
      return;
    case "js":
      return "JavaScript";
    case "c":
      return "C";
    case "lua":
      return "Lua";
    case "cpp":
      return "C++";
    case "cs":
      return "C#";
    case "mm":
      return "Objective-C++";
    case "html":
      return "HTML";
    case "sql":
      return "SQL";
    case "swift":
      return "Swift";
    case "pl":
      return "Perl";
    case "md":
      return "Markdown";
    case "java":
      return "Java";
    case "ps1":
      return "PowerShell";
    case "php":
      return "PHP";
    case "go":
      return "Go";
    case "tex":
      return "LaTex";
    case "scala":
      return "Scala";
    case "py":
      return "Python";
    case "r":
      return "R";
    case "matlab":
      return "MATLAB";
    case "css":
      return "CSS";
    case "sh":
      return "Shell";
    case "ipynb":
      return "IPython Notebook";
    case "bat":
      return "Batch";
    case "hs":
      return "Haskell";
    case "erl":
      return "Erlang";
    case "coffee":
      return "CoffeeScript";
    case "rb":
      return "Ruby";
    default:
      throw new Error(
        `Unknown language ID '${languageId}'. Create an issue or pull request: https://github.com/codevideo/syntax-spy`
      );
  }
};
