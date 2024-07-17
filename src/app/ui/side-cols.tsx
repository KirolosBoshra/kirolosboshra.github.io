import Link from "next/link"

export function LeftSide() {
  return (
    <div className="ml-2 w-56 max-md:hidden">
      <div className="flex flex-col p-2 space-y-4">
        <div className="border-b border-b-zinc-400 w-full pb-1 text-lg font-bold">Top Posts</div>
        <Link href="/" className="text-sm">Lorem ipsum dolor sit amet, qui minim labore adipisicing</Link>
        <Link href="/" className="text-sm">Lorem ipsum dolor sit amet, qui minim labore adipisicing</Link>
        <Link href="/" className="text-sm">Lorem ipsum dolor sit amet, qui minim labore adipisicing</Link>
        <Link href="/" className="text-sm">Lorem ipsum dolor sit amet, qui minim labore adipisicing</Link>
      </div>
    </div>
  );
}

export function RightSide() {
  return (
    <div className="flex flex-col items-center justify-center w-56 h-[70vh] bg-zinc-200 dark:bg-zinc-950 max-md:hidden mr-2">
      <span className="text-3xl">AD Here</span>
    </div>
  )
}
