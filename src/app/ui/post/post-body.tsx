import "./markdown.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="flex flex-col justify-center items-center p-8 max-sm:p-4">
      <div
        className="w-3/4 max-sm:w-full markdown"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
