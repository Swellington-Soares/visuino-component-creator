import * as vscode from "vscode";

import { isNullOrEmpty, isValidVariableName } from "@utils/string-utils";
import { InvalidArgumentError } from "@/exception/invalid-argument-error";
import { InvalidLibraryNameError } from "@/exception/invalid-library-name-error";


async function libraryNameInput() : Promise<string> {
    const libraryName : any = await vscode.window.showInputBox({
        placeHolder: 'MyVisuinoLibrary',
        prompt: 'Library Name (e.g. MyVisuinoLibrary)'
    });
    if (isNullOrEmpty(libraryName)) throw new InvalidArgumentError(`Library name cannot be empty`);
    if (!isValidVariableName(libraryName as string)) throw new InvalidLibraryNameError();
    return libraryName.trim();
}

export { libraryNameInput }