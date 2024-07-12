import Link from "next/link";
import { SearchBar } from "./searchBar";
import { ThemeSwitcher } from "./themeSwitcher";

type prop = {
  title: string
};

export function NavBar(prop: prop) {
  return (
    <div className="top-0 flex flex-row items-center justify-between px-12 max-sm:px-6 space-x-4 w-full h-20 border-b 
        border-b-black dark:border-b-zinc-500 bg-black bg-opacity-80 backdrop-blur-sm z-10">
      <div className="flex justify-center space-x-4">
        <Link href="/" className="text-2xl"><span>▼</span></Link>
        <Link href="/" className="text-xl max-sm:text-lg">Portfolio</Link>
        <Link href="/" className="text-xl max-sm:text-lg">Contact</Link>
      </div>
      <div>
        <span className="text-xl max-sm:hidden">{prop.title}</span>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <SearchBar />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
