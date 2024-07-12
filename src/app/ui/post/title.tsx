interface PostTitleProps {
  title: string;
}

export function PostTitle({ title }: PostTitleProps) {
  return (
    <div className="text-4xl flex justify-center items-center p-12 max-sm:text-3xl">
      <p className="group relative w-max py-2 max-sm:border-b border-zinc-400">
        <span className="font-bold">{title}</span>
        <span className="max-sm:hidden absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-400 group-hover:w-3/6"></span>
        <span className="max-sm:hidden absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-400 group-hover:w-3/6"></span>
      </p>
    </div>
  );
}
