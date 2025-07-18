# Visuno Component Generator

Extension for Visual Studio Code that simplifies the creation of **Visuino** components.  
Adds an option to the workspace context menu to automatically generate the basic structure of a new component.

## 📦 What does it do?

- Adds a "Create Visuino Component" option when right-clicking in the **Explorer**.
- Automatically generates the essential structure files.

## 🖱️ How to Use

1. Right-click on an empty space in the **workspace**.
2. Click on the `Create Visuino Component` option.
3. Enter the **Library Name**.
4. Enter the **Component Creation Name**.
5. Enter the **Full Component Name**.
6. Enter the **Component Class Name**.  
   (The prefix `TArduino` is automatically added, so you don’t need to include it.)

7. Done! The structure will be created in the selected folder.

## 🛠️ Generated Structure

Example:

```
MyComponentLib/
│   library.properties
│   visuino.library
│   
├───src
│       MyComponentLib_MyComponent.h
│       
└───Visuino
    │   Visuino.MyComponent.vcomp
    │
    └───images
```

## 📄 License

MIT © Your Name or Organization
