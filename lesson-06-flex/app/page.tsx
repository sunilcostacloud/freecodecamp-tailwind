export default function Home() {
  return (
    <>
      <div className="border-b-2 border-black border-solid">
        <div>Header</div>
        <div className="flex">
          <div className="basis-4/12">Sidebar</div>
          <div className="basis-6/12">Main Content</div>
          <div className="basis-2/12">Another Sidebar</div>
        </div>
      </div>

      <div className="mt-2 border-b-2 border-black border-solid pb-2">
        <div>
          <div>Header</div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-32 bg-sky-500">Sidebar</div>
            <div className="w-full bg-red-600">Main Content</div>
          </div>
        </div>
      </div>
      <div className="mt-2 border-b-2 border-black border-solid pb-2">
        <div>Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-wrap w-full">
            <div className="w-32 grow">01</div>
            <div className="w-32 grow">02</div>
            <div className="w-32 grow">03</div>
            <div className="w-32 grow">04</div>
            <div className="w-32 grow">05</div>
          </div>
        </div>
      </div>

      <div className="mt-2 border-b-2 border-black border-solid pb-2">
        <div>
          <div>Header</div>
          <div className="flex items-center justify-evenly">
            <div>Sider</div>
            <div>
              <h1 className="font-bold">Main Content</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam obcaecati fugiat velit doloremque eum nisi ab! Iusto
                quo odio impedit.
              </p>
            </div>
            <div>Another Sidebar</div>
          </div>
        </div>
      </div>

      <div className="mt-2 border-b-2 border-black border-solid pb-2">
        <div className="flex items-baseline">
          <div className="pt-2 pb-6 bg-sky-500">01</div>
          <div className="pt-8 pb-12 bg-red-500">02</div>
          <div className="pt-12 pb-4 bg-green-500">03</div>
        </div>
      </div>
    </>
  );
}
