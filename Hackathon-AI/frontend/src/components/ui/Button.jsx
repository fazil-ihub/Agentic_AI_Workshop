import React from 'react';
export const Button = ({ children, onClick, disabled = false, className = '', variant = 'primary' }) => {
    const base = 'inline-flex items-center justify-center gap-2 px-5 py-2.5 font-semibold rounded-lg shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none';
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-500 disabled:bg-blue-800/50 disabled:cursor-not-allowed focus:ring-blue-500',
        secondary: 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 focus:ring-slate-600',
    };
    return <button onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
};