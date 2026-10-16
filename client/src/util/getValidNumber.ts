//Shortcut for any input which must be a number with some form of validation
export function getValidNumber(
  input: string,
  fallbackNumber: number = -1,
  clampLower: number = 0,
  clampHigher: number = Number.MAX_SAFE_INTEGER,
) {
  const num = Number(input);

  if (Number.isNaN(num)) {
    return fallbackNumber;
  }

  if (num < clampLower) return clampLower;
  else if (num > clampHigher) return clampHigher;

  return num;
}
