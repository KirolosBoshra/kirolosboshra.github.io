import { Marked, Renderer } from '@ts-stack/markdown';
import fs from "fs";
import { join } from "path";
import hljs from 'highlight.js';
import katex from "katex";
import 'highlight.js/styles/github.css';

const postsDirectory = join(process.cwd(), "_posts");

class customRenderer extends Renderer {
  override heading(text: string, level: number, raw: string) {
    const regexp = /\s*{([^}]+)}$/;
    const execArr = regexp.exec(text);
    let id: string;

    if (execArr) {
      text = text.replace(regexp, '');
      id = `id="${execArr[1]}"`;
    } else {
      id = '';
    }

    return `<h${level} ${id}>${text}</h${level}>`;
  }
}

export function getPostById(id: string) {

  const fullPath = join(postsDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const content = fs.readFileSync(fullPath, "utf8");

  Marked.setBlockRule(/^@@@ *(\w+)\n([\s\S]+?)\n@@@/, function(execArr) {

    if (!execArr) {
      return '';
    }

    const channel = execArr[1];
    const content = execArr[2];

    switch (channel) {
      case 'youtube': {
        const id = content;
        return `\n<iframe width="420" height="315" src="https://www.youtube.com/embed/${id}"></iframe>\n`;
      }
      case 'katex': {
        return `${katex.renderToString(content)}`;
      }
      default: {
        const msg = `[Error: a channel "${channel}" for an embedded code is not recognized]`;
        return '<div style="color: red">' + msg + '</div>';
      }
    }
  });

  //NOTE this is not a Error lsp is just not working
  Marked.setOptions({
    renderer: new customRenderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    highlight: (code: string, lang: string) => hljs.highlight(code, { language: lang }).value
  });

  const htmlContent = Marked.parse(content).toString();

  return htmlContent;
}
