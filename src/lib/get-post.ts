import fs from "fs";
import { join } from "path";
import hljs from 'highlight.js';
import markdownit from 'markdown-it'
import { headingWithId } from "./md-plugins"

const postsDirectory = join(process.cwd(), "_posts");

//TODO add Katex support
export function getPostById(id: string) {

  const fullPath = join(postsDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const content = fs.readFileSync(fullPath, "utf8");

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

  return result;
}
