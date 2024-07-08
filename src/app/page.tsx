import { NavBar } from "./ui/navbar";
import { Footer } from "./ui/footer";
import { PostCard } from "./ui/post-card";
import { LeftSide, RightSide } from "./ui/side-cols";

const tmp = [
  {
    key: 0,
    title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing",
    date: "5 july 2024",
    link: '/',
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    key: 1,
    title: "Lorem ipsum dolor sit amet",
    date: "8 july 2024",
    link: '/',
    description: "qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    key: 2,
    title: "qui minim labore adipisicing",
    date: "10 july 2024",
    link: '/',
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    key: 3,
    title: "Lorem ipsum dolor sit ametqui minim adipisicing",
    date: "15 july 2024",
    link: '/',
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatatconsectetur cupidatat.",
  },
  {
    key: 4,
    title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing",
    date: "25 july 2024",
    link: '/',
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  }
];

export default function Home() {
  return (
    <main className="relative flex flex-col w-full h-full justify-center">
      <div className="sticky top-0"><NavBar /></div>
      <div className="flex-grow py-8">
        <div className="flex flex-row justify-evenly items-start">
          <LeftSide />
          <div className="flex-grow flex flex-col space-y-4 items-center max-md:px-4">
            {tmp.reverse().map(post => (
              <PostCard title={post.title} date={post.date} link={post.link} description={post.description} />
            ))}
          </div>
          <RightSide />
        </div>
      </div>
      <Footer />
    </main>
  );
}
