'use client'

import { ChevronRightIcon } from '@sanity/icons';
import Link from 'next/link';
import React from 'react';

export interface MyButtonProps {
  title: string;
  onClick?: string;
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
    <button  className={styles[variant]}>
        <Link href={onClick || ''}>
        <p
        className='text-center flex items-center justify-center'
        ><span>{title}</span>
          {variant  &&
           <ChevronRightIcon  className="w-8 h-8" />
          }
        </p>
    </Link>
      </button>
  );
};

export default Button;
