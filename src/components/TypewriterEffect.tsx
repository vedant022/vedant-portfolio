
import { useEffect, useState, useRef } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypewriterEffect = ({ 
  texts, 
  typingSpeed = 100, 
  delayBetweenTexts = 2000,
  className = '' 
}: TypewriterEffectProps) => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!texts.length) return;
    
    const currentTextFullString = texts[textIndex];
    
    if (isTyping) {
      // Typing forward
      if (charIndex < currentTextFullString.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentTextFullString.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing forward
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTexts);
      }
    } else {
      // Backspacing
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentTextFullString.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, typingSpeed / 2);
      } else {
        // Finished backspacing
        setIsTyping(true);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [charIndex, delayBetweenTexts, isTyping, textIndex, texts, typingSpeed]);

  return (
    <div className={`flex items-center ${className}`}>
      <span>{currentText}</span>
      <span className="ml-1 h-4 w-1 bg-current inline-block animate-blink"></span>
    </div>
  );
};

export default TypewriterEffect;
