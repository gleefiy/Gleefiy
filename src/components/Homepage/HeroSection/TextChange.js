import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["GLEEFIY", "GLEEFIY", "GLEEFIY"];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="transition ease duration-300">
      <h1 className="hero-Gleefiy">
        <span style={{ color: "#FFDE19" }}>{currenText.slice(0, 4)}</span>
        <span style={{ color: "#ffffff" }}>{currenText.slice(4)}</span>
      </h1>
    </div>
  );
};

export default TextChange;
