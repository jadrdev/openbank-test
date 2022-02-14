export function deepCopyArrayOfObjects(array) {
  return array.map((object) => ({ ...object }));
}
