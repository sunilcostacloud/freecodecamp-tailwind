"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);
  return (
    <>
      <div>
        {darkMode ? (
          <button
            className="bg-yellow-500 text-white rounded-lg p-2"
            onClick={switchMode}
          >
            light mode
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white rounded-lg p-2"
            onClick={switchMode}
          >
            dark mode
          </button>
        )}
        <div>
          <p>Hello</p>
        </div>
      </div>
    </>
  );
}
