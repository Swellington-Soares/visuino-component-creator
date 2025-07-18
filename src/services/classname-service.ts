import * as vscode from "vscode";
import { isNullOrEmpty, isValidVariableName } from "@utils/string-utils";
import { InvalidArgumentError } from "@/exception/invalid-argument-error";

async function componentClassNameInput(){
    const className : any = await vscode.window.showInputBox({
        placeHolder: 'MyComponent',
        prompt: 'Component Class Name (e.g. MyComponent)'
    });     
    if (isNullOrEmpty(className)) {throw new InvalidArgumentError(`Library name cannot be empty`);}
    if (!isValidVariableName(className as string)) {throw new InvalidArgumentError(`Component Class Name is invalid.`);}
    return className.trim();
}

export { componentClassNameInput };