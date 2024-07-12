import { Marked, Renderer } from '@ts-stack/markdown';
import fs from "fs";
import { join } from "path";
import hljs from 'highlight.js';
import markdownit from 'markdown-it'
import MarkdownItContainer from 'markdown-it-container';

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
  md.use(MarkdownItContainer, 'spoiler', {

    validate: function(params: string) {
      return !!params.trim().match(/^spoiler\s+(.*)$/);
    },

    render: function(tokens: any[], idx: number) {
      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
      console.log(tokens[idx]);
      console.log(tokens[idx].info);
      if (tokens[idx].nesting === 1) {
        // opening tag
        console.log(md.utils.escapeHtml(m[1]));
        return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';

      } else {
        // closing tag
        return '</details>\n';
      }
    }
  });
  const result = md.render(content);

  return result;
}
