import { useEffect } from "react";
import { getPasswordStrength } from "../utils/passwordUtils/passwordUtils";

export function useHandleNextButtonClick(
  nextButtonClicked,
  setNextButtonClicked,
  handleNextButtonClick,
  firstPassword,
  secondPassword,
  setIsPasswordRequirementsVisible
) {
  useEffect(() => {
    if (!nextButtonClicked) return;
    setNextButtonClicked(false);
    if (firstPassword !== secondPassword) return;
    const { score } = getPasswordStrength(firstPassword);
    if (score === 100) {
      handleNextButtonClick();
      return;
    }
    setIsPasswordRequirementsVisible(true);
  }, [
    nextButtonClicked,
    setNextButtonClicked,
    handleNextButtonClick,
    firstPassword,
    secondPassword,
    setIsPasswordRequirementsVisible,
  ]);
}