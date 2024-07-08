import { FaBookmark, FaArrowUp } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const RadialProgressBar = ({ radius, progress }: { radius: number, progress: number }) => {
  const width = `w-10`
  const height = `h-10`
  const circumference = Number((2 * Math.PI * radius).toFixed(1))
  const strokeDashOffset = (circumference - (circumference * progress) / 100)

  return (
    <div className={`relative ${width} ${height}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-zinc-900 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        />

        <circle
          className="text-zinc-200 progress-ring__circle stroke-current"
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
  return (
    <div className="sticky flex w-2/5 h-16 rounded-full bg-black 
        bg-opacity-80 backdrop-blur-sm border border-zinc-400 justify-between items-center p-4">

      <div className="flex space-x-6 items-center">
        <span className="cursor-pointer"><MdMenu size={24} /></span>
        <div className="flex items-center pl-6 space-x-2 border-l border-zinc-400">
          <FaBookmark size={34} />
          <p className="text-sm text-zinc-400">Chapter 1</p>
        </div>
      </div>

      <div className="">
        <span className="text-lg font-bold">Lorem ipsum dolor sit amet</span>
      </div>

      <div className="flex space-x-2 justify-center items-center">
        <div className="flex flex-col items-center">
          <span>100%</span>
          <span className="text-sm text-zinc-400">1/4</span>
        </div>
        <div className="border-r border-zinc-400 pr-4">
          <RadialProgressBar radius={40} progress={55} />
        </div>
        <div className="flex justify-center items-center text-zinc-300 
          rounded-full h-8 px-2 cursor-pointer hover:bg-zinc-950">
          <FaArrowUp />
        </div>

      </div>
    </div>
  );
}
