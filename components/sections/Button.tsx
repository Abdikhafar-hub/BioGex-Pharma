'use client'

import React from 'react';

export interface MyButtonProps {
  title: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'black' | 'white' | 'link';
}

const Button: React.FC<MyButtonProps> = ({ title, onClick, variant = 'primary' }) => {
  const baseStyle = 'px-2 py-1 rounded-md z-10';
  const styles = {
    primary: `${baseStyle} bg-gradient-to-r from-emerald-900 to-emerald-600 text-white hover:bg-emerald-700`,
    secondary: `${baseStyle} bg-transparent border border-emerald-600 text-emerald-600 hover:bg-emerald-200 font-semibold`,
    black: `${baseStyle} bg-black text-white`,
    white: `${baseStyle} bg-white text-black`,
    link: `${baseStyle} bg-transparent   text-white hover:bg-emerald-400/50`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      <p
      className='text-center flex items-center justify-center'
      >{title}
        {variant  && <span className="inline-block ml-1 text-white-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>}
      </p>
    </button>
  );
};

export default Button;
