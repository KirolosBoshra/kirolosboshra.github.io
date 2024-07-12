import fs from "fs";
import { join } from "path";
import hljs from 'highlight.js';
import markdownit from 'markdown-it';
import matter from "gray-matter";
import { headingWithId } from "./md-plugins";
import { Post } from "./types";

export const postsDirectory = join(process.cwd(), "_posts");


//TODO add Katex support
export function getPostById(id: string) {
  const realId = id.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realId}.md`);

  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  const md = new markdownit({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function(str, lang): string {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre><code class="hljs">' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
            '</code></pre>';
        } catch (__) { }
      }

      return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });

  md.use(headingWithId);

  const result = md.render(content);

  return { ...data, id: realId, content: result } as Post;
}

export function getPostIds() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts(): Post[] {
  const ids = getPostIds();
  if (ids.length < 2) {
    return [getPostById(ids[0])];
  }
  const posts = ids
    .map((id) => getPostById(id))
    .sort((post1, post2) => {
      if (post1 && post2) {
        return (post1.date > post2.date ? -1 : 1)
      }
      return 1;
    });
  return posts;
}

