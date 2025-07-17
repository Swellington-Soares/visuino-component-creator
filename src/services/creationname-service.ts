import * as vscode from "vscode";

import { isNullOrEmpty, isValidVariableName } from "@utils/string-utils";
import { InvalidArgumentError } from "@/exception/invalid-argument-error";

async function componentCreationNameInput(): Promise<string> {
    const componentCretionName : any = await vscode.window.showInputBox({
        placeHolder: 'MyComponent',
        prompt: 'Component Creation Name (e.g. MyComponent)'
    })     
     if (isNullOrEmpty(componentCretionName)) throw new InvalidArgumentError(`Library name cannot be empty`);
    if (!isValidVariableName(componentCretionName as string)) throw new InvalidArgumentError(`Component Creation Name is invalid.`);
    return componentCretionName.trim();
}

export { componentCreationNameInput }