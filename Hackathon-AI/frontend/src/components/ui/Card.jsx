import React from 'react';
export const Card = ({ children, className = '' }) => <div className={`glass-card ${className}`}>{children}</div>;
export const CardHeader = ({ children, className = '' }) => <div className={`p-6 border-b border-slate-800 ${className}`}>{children}</div>;
export const CardContent = ({ children, className = '' }) => <div className={`p-6 ${className}`}>{children}</div>;
export const CardTitle = ({ children, className = '' }) => <h3 className={`text-xl font-bold text-slate-50 ${className}`}>{children}</h3>;
export const CardDescription = ({ children, className = '' }) => <p className={`text-sm text-slate-400 ${className}`}>{children}</p>;
