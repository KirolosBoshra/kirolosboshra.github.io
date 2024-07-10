import "./markdown.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <div
        className="w-3/4 markdown"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
