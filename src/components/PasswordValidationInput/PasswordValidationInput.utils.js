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
