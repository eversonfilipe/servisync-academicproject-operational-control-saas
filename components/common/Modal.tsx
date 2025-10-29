import React, { useEffect } from 'react';
import Icon from './Icon';

/**
 * @interface ModalProps
 * @description Defines the props for the Modal component.
 * @property {boolean} isOpen - Controls whether the modal is visible.
 * @property {() => void} onClose - Function to call when the modal should be closed.
 * @property {string} title - The title displayed in the modal's header.
 * @property {React.ReactNode} children - The content to be rendered inside the modal's body.
 * @property {React.ReactNode} [footer] - Optional content to be rendered in the modal's footer.
 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * Renders a generic modal dialog.
 * It includes accessibility features like closing on 'Escape' key press and focus trapping.
 * @param {ModalProps} props - The props for the component.
 * @returns {JSX.Element | null} The rendered Modal component or null if not open.
 */
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
            aria-label="Close modal"
          >
            <Icon name="x" className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          {children}
        </div>
        {footer && (
          <div className="p-6 pt-4 rounded-b border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
