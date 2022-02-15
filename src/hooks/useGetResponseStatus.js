import { useEffect, useState } from "react";

import { submitForm } from "../services/api";

export function useGetResponseStatus(password, repeatedPassword, clue) {
  const [status, setStatus] = useState(undefined);
  useEffect(() => {
    if (password.length === 0 || repeatedPassword.length === 0) return;

    async function getResponseAndSetStatus() {
      const response = await submitForm(password, repeatedPassword, clue);
      setStatus(response.status);
    }
    getResponseAndSetStatus();
  }, [password, repeatedPassword, clue]);
  return status;
}
