'use client'

import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { useState, ChangeEvent, useEffect } from 'react';
import { useTheme } from "next-themes";
import clsx from 'clsx';
import Image from "next/image";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )
  if (mounted) {
    return (
      <div className="flex items-center bg-zinc-200 text-black dark:text-white dark:bg-zinc-950
          rounded-full border dark:border-zinc-700 w-16 h-8 max-sm:w-16">
        <span className={
          clsx('p-2 px-2 rounded-tr rounded-r rounded-full',
            {
              'dark:bg-zinc-200 dark:text-black': resolvedTheme === "dark"
            }
          )}>
          <input type="radio" id="dark" name="dark" value="dark"
            checked={resolvedTheme === 'dark'}
            onChange={handleRadioChange}
            className="hidden" />
          <label htmlFor="dark" className="cursor-pointer">
            <BsMoonStars />
          </label>
        </span>
        <span className={
          clsx('p-2 px-2 rounded-tl rounded-l rounded-full',
            {
              'bg-black text-white dark:bg-zinc-200 dark:text-black': resolvedTheme === "light"
            }
          )}>
          <input type="radio" id="light" name="light" value="light"
            checked={resolvedTheme === 'light'}
            onChange={handleRadioChange}
            className="hidden" />
          <label htmlFor="light" className="cursor-pointer"><MdOutlineWbSunny /></label>
        </span>
      </div>
    )
  }
}
