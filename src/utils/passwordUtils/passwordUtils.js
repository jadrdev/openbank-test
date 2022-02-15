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

export function getFontSize(value, isPasswordVisible) {
  const defaultSize = "1.1em";
  if (value.length === 0) return defaultSize;
  if (!isPasswordVisible) return "2.2em";
  return defaultSize;
}

export function getBackgroundColor(passwordScore) {
  if (passwordScore === 100) return "#00e676";
  if (passwordScore > 66) return "#ffeb3b";
  if (passwordScore > 33) return "#f27740";
  if (passwordScore > 5) return "#f00";
}