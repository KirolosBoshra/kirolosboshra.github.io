import Link from "next/link";
import { ThemeSwitcher } from "./themeSwitcher";

export function NavBar({ title }: { title: String }) {
  return (
    <div className="top-0 flex flex-row items-center justify-between px-12 max-sm:px-6 w-full h-20 border-b 
        border-b-black dark:border-b-zinc-500 dark:bg-black bg-opacity-80 backdrop-blur-sm z-10">
      <div className="flex space-x-4">
        <Link href="/" className="text-2xl"><span>▼</span></Link>
        <Link href="/" className="text-xl max-sm:text-lg">Portfolio</Link>
        <Link href="/" className="text-xl max-sm:text-lg">Contact</Link>
      </div>
      <div className="flex mr-40 justify-center items-center">
        <span className="text-xl max-sm:hidden">{title}</span>
      </div>
      <ThemeSwitcher />
    </div>
  );
}
