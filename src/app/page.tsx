import { NavBar } from "./ui/navbar";
import { Footer } from "./ui/footer";
import { PostCard } from "./ui/post-card";
import { LeftSide, RightSide } from "./ui/side-cols";
import { getAllPosts } from "@/lib/get-post";

export default function Home() {
  const posts = getAllPosts();
  return (
    <main className="relative flex flex-col w-full h-full justify-center">
      <div className="sticky top-0"><NavBar /></div>
      <div className="flex-grow py-8">
        <div className="flex flex-row justify-evenly items-start">
          <LeftSide />
          <div className="flex-grow flex flex-col space-y-4 justify-center items-center max-md:px-4">
            {posts.map((post, index) => (
              <PostCard title={post.title}
                key={index}
                date={new Date(post.date).toLocaleDateString()}
                link={"post/" + post.id.replace(/\.md$/, "")}
                description={post.description} />
            ))}
          </div>
          <RightSide />
        </div>
      </div>
      <Footer />
    </main>
  );
}
