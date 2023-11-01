export default function Home() {
  return (
    <>
      <div className="text-white bg-slate-900 mb-2 p-2">
        <div className="w-full border-b border-l-8 py-4 border-t-4">Header</div>
      </div>

      <div className="text-white bg-slate-900 mb-2 p-2">
        <div className="divide-y divide-red-500">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>

      <div className="bg-slate-900 mb-2 p-2">
        <input
          type="text"
          className="border-2 border-dotted border-rose-600 outline-none"
        />
      </div>

      <div className="text-white bg-slate-900 mb-2 p-2">
        <div className="grid grid-cols-3 divide-x divide-dashed divide-red-500">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
    </>
  );
}
