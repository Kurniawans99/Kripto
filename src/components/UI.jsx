import React from 'react';

export const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl border border-zinc-200 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}>
    {children}
  </div>
);

export const Button = ({ children, onClick, variant = "primary", className = "", disabled=false }) => {
  const base = "px-4 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";
  
  const variants = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-lg shadow-zinc-900/20",
    secondary: "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 hover:-translate-y-0.5 hover:shadow-md",
    ghost: "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100",
    outline: "border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-indigo-300 hover:text-indigo-600",
    danger: "bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 hover:-translate-y-0.5"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export const Input = ({ value, onChange, placeholder, type="text", maxLength, className="" }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    maxLength={maxLength}
    placeholder={placeholder}
    className={`w-full px-3 py-2.5 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 ${className}`}
  />
);

export const TextArea = ({ value, onChange, placeholder, className="", readOnly=false }) => (
  <textarea
    value={value}
    onChange={onChange}
    readOnly={readOnly}
    placeholder={placeholder}
    className={`w-full p-3 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 resize-none ${readOnly ? 'bg-zinc-50 text-zinc-500 cursor-default' : 'bg-white text-zinc-900'} ${className}`}
  />
);

export const Badge = ({ children, variant="default" }) => {
  const variants = {
    default: "bg-zinc-100 text-zinc-600 border-zinc-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200"
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-semibold border uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};