"use client";
import { useState, useEffect } from "react";

const DynamicText = () => {
  const phrases = [
    "Software Engineer.",
    "Full Stack Developer.",
    "Problem Solver.",
    "Tech Enthusiast.",
  ];

  // Colors for each phrase to mimic code syntax
  const phraseColors = [
    "text-blue-500",   // color for "Software Engineer."
    "text-green-500",  // color for "Full Stack Developer."
    "text-yellow-500", // color for "Problem Solver."
    "text-red-500",    // color for "Tech Enthusiast."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // control typing speed

  const pauseBetweenPhrases = 1500; // pause after typing a full phrase

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      // erasing characters
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));

        // when fully erased, switch to typing the next phrase
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, typingSpeed / 2); // faster erase speed
    } else {
      // typing characters
      const currentPhrase = phrases[currentPhraseIndex];
      timeout = setTimeout(() => {
        setCurrentText((prev) => currentPhrase.slice(0, prev.length + 1));

        // once the phrase is fully typed, pause before erasing
        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <h1 className="text-4xl">
      I am a{" "}
      <span className={`${phraseColors[currentPhraseIndex]} font-mono`}>
        {currentText}
      </span>
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

export default DynamicText;
