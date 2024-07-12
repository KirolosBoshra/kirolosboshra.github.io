import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";


//TODO
export function ThemeSwitcher() {
  return (
    <fieldset className="flex justify-between items-center space-x-6 px-2 bg-zinc-950
          rounded-full border border-zinc-700 w-20 h-8 max-sm:w-16">
      <BsMoonStars />
      <MdOutlineWbSunny />
    </fieldset>
  )
}
