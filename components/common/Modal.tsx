
import React, { useEffect } from 'react';
import Icon from './Icon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex items-center justify-center" onClick={onClose}>
      <div className="relative mx-auto p-5 border w-full max-w-lg shadow-lg rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start p-4 rounded-t border-b">
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={onClose}
          >
            <Icon name="x" className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          {children}
        </div>
        {footer && (
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
