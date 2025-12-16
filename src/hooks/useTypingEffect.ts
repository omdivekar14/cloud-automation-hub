import { useState, useEffect } from "react";

export const useTypingEffect = (text: string, speed = 50, startDelay = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const startTyping = () => {
      let index = 0;
      const type = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
};
