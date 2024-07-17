import { FaSearch } from "react-icons/fa";
export function SearchBar() {
  return (
    <div>
      <div className="relative flex flex-1 flex-shrink-0 max-sm:hidden">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full bg-zinc-200 dark:bg-zinc-950 rounded-md py-2 pl-10 text-sm 
          outline-2 placeholder:text-zinc-400"
          placeholder="Search"
        />
        <FaSearch className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 
        text-zinc-400 peer-focus:text-zinc-800" />
      </div>
      <div className="hidden p-3 bg-zinc-200 dark:bg-zinc-950 rounded-full border border-zinc-600 max-sm:block"><FaSearch /></div>
    </div>
  )
}
