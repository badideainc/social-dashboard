export function validateImage(url: string) {
  const validImagePath = /^\S+(.jpg)|(.png)/;

  return validImagePath.test(url);
}
