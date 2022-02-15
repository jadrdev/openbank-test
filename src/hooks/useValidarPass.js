import { useState, useEffect } from "react";

import { getPasswordStrength } from "../utils/passwordUtils/passwordUtils";

export function useValidarPass(password, setPasswordScoreProp) {
  const [passwordScore, setPasswordScore] = useState(0);
  useEffect(() => {
    const { score } = getPasswordStrength(password);
    setPasswordScore(score);
  }, [password]);
  return passwordScore;
}