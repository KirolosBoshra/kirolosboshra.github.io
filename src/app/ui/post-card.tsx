import Link from "next/link";

type cardProps = {
  title: string,
  date: string,
  link: string,
  description: string,
};

export function PostCard({ title, date, link, description }: cardProps) {
  return (
    <div className="flex flex-col w-1/2 max-md:w-full h-48 bg-gray-100 dark:bg-zinc-950 p-4 rounded-md border dark:border-zinc-800 space-y-2">
      <div className="border-b border-zinc-400 pb-2 text-xl"><Link href={link}>{title}</Link></div>
      <div className="dark:text-zinc-500 text-xs p-1">{date}</div>
      <div className="text-sm dark:text-zinc-300 overflow-hidden">{description}</div>
    </div>
  )
}
