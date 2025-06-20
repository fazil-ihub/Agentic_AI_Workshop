import React from 'react';

export const Button = ({ children, onClick, disabled = false, className = '', variant = 'primary' }) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 px-5 py-2.5 font-semibold rounded-lg shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none';
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-800/50 disabled:cursor-not-allowed focus:ring-blue-500',
        secondary: 'bg-gray-700/50 text-gray-200 hover:bg-gray-700 border border-gray-600 focus:ring-gray-500',
    };
    return <button onClick={onClick} disabled={disabled} className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</button>;
};
