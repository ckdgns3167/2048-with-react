import { useState, useEffect } from "react";

export default function useLocalStorageNumber(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log(window.localStorage);
    const valueStr = window.localStorage.getItem(key);
    if (valueStr) {
      console.log("valueStr: ", valueStr);
      setValue(Number(valueStr));
    }
  }, [key]);

  useEffect(() => {
    const prev = window.localStorage.getItem(key);
    const next = String(value);
    if (prev !== next) {
      window.localStorage.setItem(key, next);
    }
  }, [key, value]);

  return [value, setValue];
}
