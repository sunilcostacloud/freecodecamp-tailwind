export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Title 1</h1>
      <h2 className="text-2xl">Title 2</h2>
      <h3 className="text-xl">Title 3</h3>
      <p className="text-base  underline decoration-red-600 decoration-wavy decoration-1 underline-offset-4 leading-normal">
        A regular paragraph
      </p>
      <p className="text-sm">A description paragraph</p>
      <p className="text-xs note">A little note</p>
      <p className="text-myCustomFontSize">custom font size</p>

      <h1 className="text-3xl">List Example</h1>
      <ul className="list-disc pl-4">
        {/* Use "list-disc" to style list markers as filled circles */}
        <li className="text-base">Item 1</li>
        <li className="text-base">Item 2</li>
        <li className="text-base">Item 3</li>
      </ul>
      <div style={{ width: "200px" }}>
        <p className="truncate">
          This is a long sentance with a lot of words to explain that truncate
          will truncate my sentance
        </p>
      </div>
      <p className="whitespace-nowrap">
        This is a long sentance with a lot of words to explain that truncate
        will truncate my sentance
      </p>
      <p className="break-words">
        This is a long sentance with a lot of words to
        lsdfjsdfjsdjfojdflksdnfjniufhinfilywefuygwefhiwebfhweifbuwefbihwebfibweifbiwebfiyweoufweifou
      </p>
      <p className="break-all">
        This is a long sentance with a lot of words to
        lsdfjsdfjsdjfojdflksdnfjniufhinfilywefuygwefhiwebfhweifbuwefbihwebfibweifbiwebfiyweoufweifou
      </p>
    </div>
  );
}
