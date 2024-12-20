import { NavBar } from "./ui/navbar";
import { Footer } from "./ui/footer";
import { PostCard } from "./ui/post-card";
import { getAllPosts } from "@/lib/get-post";

export default function Home() {
  const posts = getAllPosts();
  return (
    <main className="relative flex flex-col w-full max-w-full h-full justify-center ">
      <div className="sticky top-0"><NavBar title="Home" /></div>
      <div className="flex-grow py-8">
        <div className="flex-grow flex flex-col space-y-4 justify-center items-center max-md:px-4">
          {posts.map((post, index) => (
            <PostCard title={post.title}
              key={index}
              date={new Date(post.date).toLocaleDateString().replaceAll('/', '-')}
              link={"post/" + post.id}
              description={post.description} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
