import { useState, useEffect } from "react";

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function getWindowDimensions() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  return {
    width,
    height,
  };
}

export function asyncSetTimeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
