import React from 'react';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClose: () => void;
  onClick: () => void;
  children?: React.ReactNode;
  isMobile?: boolean;
}

const Window: React.FC<WindowProps> = ({ title, icon, isActive, onClose, onClick, children, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`absolute top-4 left-4 right-4 bottom-16 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col ${
        isActive ? 'z-10' : 'z-0'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-200 rounded-md">
            <Minus className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-md">
            <Square className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-2 hover:bg-red-500 hover:text-white rounded-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Window;