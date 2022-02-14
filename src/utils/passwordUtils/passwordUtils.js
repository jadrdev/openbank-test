import { deepCopyArrayOfObjects } from "../arrayUtils/arrayUtils";

export const defaultRequirements = [
  {
    description: "Tiene entre 8 y 24 carácteres",
    test: (s) => s.length > 7 && s.length < 23,
    passesTest: false,
  },
  {
    description: "Tiene al menos un número",
    test: (s) => /[0-9]/.test(s),
    passesTest: false,
  },
  {
    description: "Tiene al menos una letra mayúscula",
    test: (s) =>
      Array.from(s)
        .map(
          (character) =>
            character === character.toUpperCase() &&
            character !== character.toLowerCase()
        )
        .some((bool) => bool === true),
    passesTest: false,
  },
];
export function getPasswordStrength(password) {
  const requirements = deepCopyArrayOfObjects(defaultRequirements);
  let score = 0;
  requirements.forEach((testSpecification) => {
    testSpecification.passesTest = testSpecification.test(password);
    score += testSpecification.passesTest;
  });
  score = (score * 100) / requirements.length;
  score = score === 0 && password.length ? 10 : score;
  return { score, requirements };
}
