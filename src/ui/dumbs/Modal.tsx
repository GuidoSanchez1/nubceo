import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md relative"
                onClick={(e) => e.stopPropagation()}
            >
                {title && <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>}
                <div className="text-gray-800 dark:text-gray-200">{children}</div>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-white text-lg"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};
