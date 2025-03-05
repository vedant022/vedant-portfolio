
import React, { useState, useEffect, useRef } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
  cursorClassName?: string;
  colorClasses?: string[]; // Array of color classes that match the texts array
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
  className = '',
  cursorClassName = '',
  colorClasses = [] // Default empty array if no colors provided
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isTypingPaused, setIsTypingPaused] = useState(false);
  
  // This ref keeps track of the timeout
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Clear any existing timeout when component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (texts.length === 0) return;
    
    if (isTypingPaused) return;
    
    // Calculate the current text from the array
    const currentText = texts[textIndex];
    
    // Determine the delay based on whether we're typing or deleting
    const delay = isDeleting ? deletingSpeed : typingSpeed;
    
    // Set up the timeout for the next character change
    timeoutRef.current = setTimeout(() => {
      // If we're deleting, remove a character
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
      } else {
        // If we're typing, add a character
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }
      }
      
      // Conditions to change direction or text
      if (!isDeleting && displayText === currentText) {
        // Finished typing, pause before starting to delete
        setIsTypingPaused(true);
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
          setIsTypingPaused(false);
        }, delayBetweenTexts);
      } else if (isDeleting && displayText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, delay);
    
    // Cleanup function to clear timeout
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts, isTypingPaused]);
  
  // Get the current color class based on the textIndex
  const currentColorClass = colorClasses[textIndex] || '';
  
  return (
    <span className={`inline-flex items-center ${className} ${currentColorClass}`}>
      {displayText}
      <span className={`ml-0.5 h-5 w-[2px] bg-current animate-blink ${cursorClassName}`}></span>
    </span>
  );
};

export default TypewriterEffect;
