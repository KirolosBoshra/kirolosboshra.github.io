'use client'

import { getScrollPercentage } from "@/lib/scrollPercentage";
import { FaArrowUp } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";

const RadialProgressBar = ({ radius, progress }: { radius: number, progress: number }) => {
  const width = `w-10`
  const height = `h-10`
  const circumference = Number((2 * Math.PI * radius).toFixed(1))
  const strokeDashOffset = (circumference - (circumference * progress) / 100)

  return (
    <div className={`relative ${width} ${height}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-400 dark:text-zinc-900 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        />

        <circle
          className="text-black dark:text-zinc-200 progress-ring__circle stroke-current"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={`${strokeDashOffset}px`} />
      </svg>
    </div>
  )
}

export function ChapterSelector() {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [isMenuOpen, setMenuOpen] = useState<Boolean>(false);
  const [headers, setHeaders] = useState<Element[]>([]);

  useEffect(() => {
    setHeaders(Array.from(document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')));

    const handleScroll = () => {
      setScrollPercent(getScrollPercentage());
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className="sticky flex w-60 max-sm:w-3/5  h-16 space-x-2 rounded-full bg-gray-100 dark:bg-black 
        bg-opacity-80 backdrop-blur-sm border dark:border-zinc-400 justify-between items-center p-4">

      <div className="flex items-center pr-2 border-r border-zinc-400">
        <span className="cursor-pointer"><MdMenu size={24} onClick={() => {
          setMenuOpen(!isMenuOpen);
        }} /></span>
        {isMenuOpen && (
          <div className="absolute top-14 w-58 bg-zinc-100 dark:bg-black border border-zinc-400 
              shadow-lg rounded-lg p-2">
            <ul className="space-y-2">
              {
                headers.map((header, index) => (
                  <li key={index} className="cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-800 p-2 rounded"
                    onClick={() => {
                      scrollToElementById(header.id);
                      setMenuOpen(false)
                    }}>
                    {header.textContent}
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>

      {/*<div className="absolute flex left-0 right-8 justify-center items-center">
        <span className="text-lg font-bold max-sm:hidden">{title}</span>
      </div>*/}

      <div className="flex space-x-2 shrink justify-center items-center">
        <span className="max-sm:text-sm">{scrollPercent.toFixed()}%</span>
        <div className="border-r border-zinc-400 pr-4">
          <RadialProgressBar radius={40} progress={scrollPercent} />
        </div>
        <div className="flex justify-center items-center dark:text-zinc-300 
          rounded-full h-8 px-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-950">
          <FaArrowUp onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }} />
        </div>

      </div>
    </div>
  );
}

const scrollToElementById = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth', block: 'start'
    });
  }
};
