class LibraryAlreadyExistsError extends Error {
  constructor() {
    super("Folder with library name already exists.");
    this.name = this.constructor.name;
  }
}

export { LibraryAlreadyExistsError };