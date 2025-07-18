import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

import { license } from "@/assets/license";
import { libraryTemplate } from "@/assets/library-properties";


function componentTemplate(
  componentLibrary: string,
  className: string,
  componentName: string,
  componentFullName: string
) {
  return `//CREATED BY COMPONENT CREATION 
//VERSION: 1
//DATE: ${new Intl.DateTimeFormat("en-US").format(new Date())}

${componentLibrary}: Namespace
  

  [Name('${componentFullName}')]
  [CreateName('${componentName}')]
  [ArduinoClass('${componentLibrary}::${className}')]
  [ArduinoInclude('${componentLibrary}_${className}.h')]
  +TArduino${className}: TArduinoComponent
    
    [OWArduinoExclude]
    Version: string = '1.0'
  ;


; //${componentLibrary}

`;
}

function arduinoCodeTemplate(libraryName: any, componentClassName: any) {
  return `${license}

#pragma once
#include <Mitov.h>

namespace ${libraryName}
{
  class ${componentClassName} {

  };
} //${libraryName}
`;
}


async function createComponentStructure(uri: vscode.Uri, 
    libraryName: string,
    componentCreationName: string, 
    componentFullName: string, 
    componentClassName: string) {

    const componentBasePath = path.join(uri.fsPath, libraryName);    
    const srcDir = path.join(componentBasePath, "src");
    const visuinoDir = path.join(componentBasePath, "Visuino");
    const imageDir = path.join(visuinoDir, "images");
    const libraryFilePath = path.join(componentBasePath, "library.properties");
    
    const componentFileName = componentClassName?.replace(/^T/, "").trim();
    const arduinoCodeFilePath = path.join(srcDir, `${libraryName}_${componentFileName}.h` );
    const vcomfilePath = path.join(visuinoDir, `Visuino.${componentFileName}.vcomp`);

    fs.mkdirSync(componentBasePath);
    fs.mkdirSync(srcDir);
    fs.mkdirSync(visuinoDir);
    fs.mkdirSync(imageDir);

    fs.writeFileSync(path.join(componentBasePath, "visuino.library"), "");
    fs.writeFileSync(libraryFilePath, libraryTemplate);
    fs.writeFileSync(vcomfilePath, componentTemplate(libraryName, componentClassName, componentCreationName, componentFullName))
    fs.writeFileSync(arduinoCodeFilePath, arduinoCodeTemplate(libraryName, componentFileName));


    //open relevant files
    let doc = await vscode.workspace.openTextDocument(arduinoCodeFilePath);
    vscode.window.showTextDocument(doc, vscode.ViewColumn.One, false);
    doc = await vscode.workspace.openTextDocument(vcomfilePath);
    vscode.window.showTextDocument(doc, vscode.ViewColumn.Two, false);
    doc = await vscode.workspace.openTextDocument(libraryFilePath);
    vscode.window.showTextDocument(doc, vscode.ViewColumn.Three, false);

}

export { createComponentStructure }