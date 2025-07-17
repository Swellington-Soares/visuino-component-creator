import * as vscode from "vscode";

import { isNullOrEmpty } from "@utils/string-utils";
import { InvalidArgumentError } from "@/exception/invalid-argument-error";


async function componentFullnameInput() : Promise<string> {
     const fullname : any = await vscode.window.showInputBox({
        placeHolder: 'My Sum Component',
        prompt: 'Component Full Name (e.g. My Sum Component)'
    })     
     if (isNullOrEmpty(fullname)) throw new InvalidArgumentError(`Component Full name cannot be empty`);    
    return fullname.trim();
}

export { componentFullnameInput }