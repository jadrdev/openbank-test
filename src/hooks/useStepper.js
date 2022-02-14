import useWindowSize from "./useWindosSize";
import { useState, useEffect } from "react";

export function useGetPointerLeftPositionOnStepChange(stepIndicatorRef) {
  const { width } = useWindowSize();
  const [left, setLeft] = useState(undefined);
  useEffect(() => {
    setLeft(stepIndicatorRef?.current?.offsetLeft + 7);
  }, [stepIndicatorRef, width]);
  return left;
}