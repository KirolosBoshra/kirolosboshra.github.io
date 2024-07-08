import Link from "next/link";

type prop = {
  title: string
};

export function NavBar() {
  return (
    <div className="top-0 flex flex-row items-center justify-between px-12 space-x-4 w-full h-20 border-b 
        border-b-black dark:border-b-zinc-500 bg-black bg-opacity-80 backdrop-blur-sm z-10">
      <div className="space-x-4">
        <Link href="/" className="text-2xl"><span>▼</span></Link>
        <Link href="/" className="text-xl">Portfolio</Link>
        <Link href="/" className="text-xl">Contact Me</Link>
      </div>
      <div>
        <h2>Placeholder For The Title </h2>
      </div>
      <div className="flex flex-row space-x-4">
        <h1>Search</h1>
        <h1>Search</h1>
        <h1>Search</h1>
        <h1>Search</h1>
      </div>
    </div>
  );
}
