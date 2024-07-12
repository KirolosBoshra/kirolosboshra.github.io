import { NavBar } from "@/app/ui/navbar";
import { Footer } from "@/app/ui/footer";
import { PostBody } from "@/app/ui/post/post-body";
import { ChapterSelector } from "@/app/ui/post/chapter-selector";
import { PostTitle } from "@/app/ui/post/title";
import { getAllPosts, getPostById, postsDirectory } from "@/lib/get-post";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import fs from "fs";
import { join } from "path";
import 'highlight.js/styles/atom-one-dark.css';

type Params = {
  params: {
    id: string;
  };
};

export default function Post({ params }: Params) {
  const fullPath = join(postsDirectory, `${params.id}.md`);
  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const post = getPostById(params.id);
  return (
    <main className="relative flex flex-col w-full h-full justify-center space-y-6">
      <NavBar title={post.title} />
      <PostTitle title="Lorem ipsum dolor sit amet, qui minim labore adipisicing" />
      <div className="sticky top-4 flex justify-center items-center">
        <ChapterSelector />
      </div>
      <PostBody content={post.content} />
      <Footer />
    </main>
  );
}

export function generateMetadata({ params }: Params): Metadata {
  const fullPath = join(postsDirectory, `${params.id}.md`);
  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const post = getPostById(params.id);

  const title = `${post.title} | Kiro Dev Blog`;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}
