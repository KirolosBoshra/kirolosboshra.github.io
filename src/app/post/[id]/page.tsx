import { NavBar } from "@/app/ui/navbar";
import { Footer } from "@/app/ui/footer";
import { PostBody } from "@/app/ui/post/post-body";
import { ChapterSelector } from "@/app/ui/post/chapter-selector";
import { PostTitle } from "@/app/ui/post/title";
type Params = {
  params: {
    id: string;
  };
};

export default function Post({ params }: Params) {
  return (
    <main className="relative flex flex-col w-full h-full justify-center space-y-6">
      <NavBar />
      <PostTitle title="Lorem ipsum dolor sit amet, qui minim labore adipisicing" />
      <div className="sticky top-4 flex justify-center items-center">
        <ChapterSelector />
      </div>
      <PostBody />
      <Footer />
    </main>
  );
}
