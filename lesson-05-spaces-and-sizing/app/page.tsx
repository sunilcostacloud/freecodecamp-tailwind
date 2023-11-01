export default function Home() {
  return (
    <>
      <div>
        <div className="bg-red-500 text-white font-bold pl-1">
          box with margin
        </div>
        <div className="bg-red-500 text-white font-bold m-4">
          box with padding
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-4">This is my title</h1>
          <p>This is my paragraph</p>
        </div>
        <div className="mt-18">
          <div className="h-16 w-36 bg-blue-500 opacity-20"></div>
          <div className="bg-red-300 -mt-8">-mt8</div>
        </div>
        <div className="mt-8 flex w-full max-w-full min-h-screen space-x-4">
          <div className="w-1/5 bg-red-500">sidebar</div>
          <div className="w-4/5 bg-green-500">main content</div>
        </div>
        <div className="bg-yellow-600 mt-customMargin">
          <div className="m-[10px]">hello</div>
        </div>
      </div>
    </>
  );
}
