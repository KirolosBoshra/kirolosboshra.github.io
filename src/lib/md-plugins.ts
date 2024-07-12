import markdownit from "markdown-it";

export function headingWithId(md: markdownit) {
  // Helper function to extract id and clean content
  function extractId(content: string): { text: string, id: string | null } {
    const match = content.match(/^(.*?)\s*\{(.*?)\}$/);
    if (match) {
      return { text: match[1], id: match[2] };
    }
    return { text: content, id: null };
  }

  // Override the heading_open rule
  md.renderer.rules.heading_open = function(tokens, idx, options, env, self) {
    let token = tokens[idx];
    let contentToken = tokens[idx + 1];

    if (contentToken.type === 'inline') {
      const { text, id } = extractId(contentToken.content);
      contentToken.content = text;
      contentToken.children?.map((c) => {
        c.content = text;
      });

      if (id) {
        token.attrs = token.attrs || [];
        token.attrs.push(['id', id]);
      }
    }
    return self.renderToken(tokens, idx, options);
  };
}

// TODO not used yet
// md.use(MarkdownItContainer, 'spoiler', {
//
//   validate: function(params: string) {
//     return !!params.trim().match(/^spoiler\s+(.*)$/);
//   },
//
//   render: function(tokens: any[], idx: number) {
//     var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
//     if (tokens[idx].nesting === 1) {
//       // opening tag
//       return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
//
//     } else {
//       // closing tag
//       return '</details>\n';
//     }
//   }
// });

