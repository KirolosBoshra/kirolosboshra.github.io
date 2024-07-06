'use client'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from 'react';
import clsx from 'clsx';

const email = "kirolosboshra69@gmail.com";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);


  const handleClick = async () => {
    setIsVisible(!isVisible);
    try {
      if (!isCopied) {
        await navigator.clipboard.writeText(email);
        setIsCopied(true);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <div className="flex flex-row px-4 w-full h-32 bottom-0
        items-center border border-black dark:border-t-zinc-500 ">
      <span className="text-lg">Contact Me:</span>
      <div
        className="flex items-center gap-5 px-4 py-3 font-medium border-r border-zinc-400">
        <a href="https://github.com/kingkiro99"><FaGithub size={28} /></a>

        <div className="flex space-x-2 group cursor-pointer" onClick={handleClick}>
          <MdAlternateEmail size={28} />
          <div className={
            clsx('overflow-hidden max-w-0 transition-all duration-300 ease-in-out', {
              'max-w-xs ml-2': isVisible
            })
          }>
            <p className="group relative w-max">
              <span>{email}</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-400 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-400 group-hover:w-3/6"></span>
            </p>
          </div>
        </div>

        <a href="https://github.com/kingkiro99"><FaLinkedin size={28} /></a>
      </div >
    </div >
  );
}
