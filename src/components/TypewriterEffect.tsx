
import { useEffect, useState, useRef } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  typingSpeed = 50,
  delayBetweenTexts = 2000,
  className = '',
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  // Effect to handle the typing animation
  useEffect(() => {
    const text = texts[currentTextIndex];
    
    if (isTyping) {
      // Typing text
      if (currentText.length < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(text.substring(0, currentText.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTexts);
        
        return () => clearTimeout(timeout);
      }
    } else {
      // No need to delete for loading screen, just repeat the text
      // Reset to start typing the next text
      const timeout = setTimeout(() => {
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setCurrentText('');
        setIsTyping(true);
      }, typingSpeed * 2);
      
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentTextIndex, delayBetweenTexts, isTyping, texts, typingSpeed]);
  
  return (
    <span className={className}>
      {currentText}
      <span className="ml-0.5 h-5 w-[2px] bg-current inline-block animate-blink"></span>
    </span>
  );
};

export default TypewriterEffect;
