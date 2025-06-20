import React from 'react';

export const Input = ({ value, onChange, placeholder, disabled }) => (
    <input type="url" value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} className="flex-grow p-3 w-full bg-gray-900/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all outline-none disabled:opacity-50" required />
);