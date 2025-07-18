import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import { libraryNameInput } from "./services/libraryname-service";
import { LibraryAlreadyExistsError } from "./exception/library-already-exists-error";
import { componentCreationNameInput } from "./services/creationname-service";
import { componentFullnameInput } from "./services/fullname-service";
import { componentClassNameInput } from "./services/classname-service";
import { createComponentStructure } from "./services/create-service";


async function showErrorMessage(message: string) {
  await vscode.window.showErrorMessage(message);
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "visuino-component-creator.createComponent",
    async (uri: vscode.Uri) => {
      try {
        const libraryName = await libraryNameInput();

        if (fs.existsSync(path.join(uri.fsPath, libraryName))) 
          throw new LibraryAlreadyExistsError();
        
        const componentCreationName = await componentCreationNameInput();

        const componentFullName = await componentFullnameInput()

        const componentClassName = await componentClassNameInput()

        await createComponentStructure(
          uri,
          libraryName,
          componentCreationName,
          componentFullName,
          componentClassName
        )

        await vscode.window.showInformationMessage("Component Created!")

      } catch (error: any) {
        await showErrorMessage(error.message);
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
