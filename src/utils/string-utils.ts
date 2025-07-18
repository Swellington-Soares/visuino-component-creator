function isNullOrEmpty(str: string | null | undefined): boolean {
  return str === null || (typeof str === "string" && str.trim().length === 0);
}

function isValidVariableName(str: string): boolean {
  if (typeof str !== "string") {
    return false;
  }
  return /^[a-zA-Z][a-zA-Z0-9_]*$/.test(str.trim());
}

export { isNullOrEmpty, isValidVariableName };
