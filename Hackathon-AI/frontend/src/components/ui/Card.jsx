import React from 'react';

export const Card = ({ children, className = '' }) => (
    <div className={`bg-slate-900/60 border border-blue-900/50 rounded-2xl shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-blue-700/70 hover:shadow-blue-500/10 ${className}`}>
        {children}
    </div>
);
// CardHeader, CardContent etc. can remain the same
export const CardHeader = ({ children, className = '' }) => <div className={`p-6 border-b border-slate-800 ${className}`}>{children}</div>;
export const CardContent = ({ children, className = '' }) => <div className={`p-6 ${className}`}>{children}</div>;
export const CardTitle = ({ children, className = '' }) => <h3 className={`text-xl font-bold text-slate-100 ${className}`}>{children}</h3>;
export const CardDescription = ({ children, className = '' }) => <p className={`text-sm text-slate-400 ${className}`}>{children}</p>;

