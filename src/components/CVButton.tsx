
import React from 'react';
import { FileText } from 'lucide-react';

interface CVButtonProps {
  className?: string;
  href?: string;
}

const CVButton: React.FC<CVButtonProps> = ({ 
  className = '', 
  href = '/resume.pdf' 
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-full bg-white px-5 py-2.5 transition-all duration-300 ease-out border border-black/10 shadow-md hover:shadow-lg hover:border-black/20 ${className}`}
      download="Vedant_Agrawal_CV.pdf"
    >
      <span className="absolute right-0 -mt-12 h-[300px] w-[300px] -translate-x-[0px] translate-y-[60px] rotate-45 rounded-full bg-accent opacity-0 transition-all duration-300 ease-out group-hover:translate-y-[0px] group-hover:opacity-20"></span>
      <span className="relative flex items-center justify-center gap-2 text-sm font-medium text-slate-900">
        <FileText size={18} className="transition-all duration-300 ease-out group-hover:scale-110" />
        Download CV
      </span>
    </a>
  );
};

export default CVButton;
