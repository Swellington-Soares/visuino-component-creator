class InvalidLibraryNameError extends Error {
  constructor() {
    super("Library name is invalid.");
    this.name = this.constructor.name;
  }
}

export { InvalidLibraryNameError }