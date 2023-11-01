export default function Home() {
  return (
    <>
      <div className="text-white bg-slate-900">
        <div className="container mx-auto">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-sky-500 p-6 rounded-lg">1</div>
            <div className="bg-sky-500 p-6 rounded-lg">2</div>
            <div className="bg-sky-500 p-6 rounded-lg">3</div>
            <div className="col-span-3 bg-red-500 p-6 rounded-lg">4</div>
            <div className="bg-sky-500 p-6 rounded-lg">5</div>
            <div className="bg-sky-500 p-6 rounded-lg">6</div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="text-white bg-slate-900 py-2">
          <div className="grid grid-cols-6 gap-4">
            <div className="p-6 col-start-3 col-span-4 bg-sky-500 rounded-lg">
              01
            </div>
            <div className="p-6 col-start-1 col-end-4 bg-sky-500 rounded-lg">
              02
            </div>
            <div className="p-6 col-end-7 col-span-2 bg-sky-500 rounded-lg">
              03
            </div>
            <div className="p-6 col-start-1 col-end-7 bg-sky-500 rounded-lg">
              04
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 mb-2">
        <div className="text-white bg-slate-900 py-2">
          <div className="container mx-auto">
            <div className="grid grid-flow-col auto-cols-max">
              <div className="p-6 rounded-lg bg-sky-500">01</div>
              <div className="p-6 rounded-lg bg-sky-500">02</div>
              <div className="p-6 rounded-lg bg-sky-500">03</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 mb-2">
        <div className="text-white bg-slate-900 py-2">
          <div className="container mx-auto">
            <div className="grid grid-flow-col grid-rows-4 gap-4">
              <div className="p-6 rounded-lg bg-sky-500 row-span-3">01</div>
              <div className="p-6 rounded-lg bg-sky-500">02</div>
              <div className="p-6 rounded-lg bg-sky-500">03</div>
              <div className="p-6 rounded-lg bg-sky-500">04</div>
              <div className="p-6 rounded-lg bg-sky-500 row-span-2">05</div>
              <div className="p-6 rounded-lg bg-sky-500">06</div>
              <div className="p-6 rounded-lg bg-sky-500">07</div>
              <div className="p-6 rounded-lg bg-sky-500">08</div>
              <div className="p-6 rounded-lg bg-sky-500">09</div>
              <div className="p-6 rounded-lg bg-sky-500">10</div>
              <div className="p-6 rounded-lg bg-sky-500">11</div>
              <div className="p-6 rounded-lg bg-sky-500">12</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 mb-2">
        <div className="text-white bg-slate-900 py-2">
          <div className="container mx-auto">
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
              <div className="p-6 rounded-lg bg-sky-500 col-span-2">01</div>
              <div className="p-6 rounded-lg bg-sky-500 col-span-2">02</div>
              <div className="p-6 rounded-lg bg-sky-500">03</div>
              <div className="p-6 rounded-lg bg-sky-500">04</div>
              <div className="p-6 rounded-lg bg-sky-500">05</div>
              <div className="p-6 rounded-lg bg-sky-500 col-span-2">06</div>
              <div className="p-6 rounded-lg bg-sky-500">07</div>
              <div className="p-6 rounded-lg bg-sky-500">08</div>
              <div className="p-6 rounded-lg bg-sky-500">09</div>
              <div className="p-6 rounded-lg bg-sky-500 col-span-2">10</div>
              <div className="p-6 rounded-lg bg-sky-500">11</div>
              <div className="p-6 rounded-lg bg-sky-500">12</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
