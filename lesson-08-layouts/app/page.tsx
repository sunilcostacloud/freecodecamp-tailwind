import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-16 text-white bg-slate-900 mb-2">
        <div className="container bg-red-500">
          <h1>Hello</h1>
        </div>
      </div>

      <div className="text-white bg-slate-900 mb-4">
        <div className="container px-2">
          <p>
            <img
              className="w-64 float-left"
              src="https://images8.alphacoders.com/132/1329486.png"
              alt="image"
            />
            <img
              className="w-32 float-right"
              src="https://images8.alphacoders.com/132/1329486.png"
              alt="image"
            />
          </p>
          <p className="clear-both">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            adipisci assumenda amet similique magnam impedit quo at provident
            repudiandae perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            adipisci assumenda amet similique magnam impedit quo at provident
            repudiandae perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            adipisci assumenda amet similique magnam impedit quo at provident
            repudiandae perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            adipisci assumenda amet similique magnam impedit quo at provident
            repudiandae perspiciatis.
          </p>
        </div>
      </div>

      <div className="text-white bg-slate-900 mb-2">
        <div className="container px-2">
          <div className="relative bg-red-500 p-8 rounded-lg w-32 h-32">
            <div className="bg-green-500 p-8 rounded-lg w-24 h-24 absolute inset-2"></div>
          </div>
        </div>
      </div>

      <div className="text-white bg-slate-900 mb-2">
        <div className="container">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-teal-500">01</div>
            <div className="invisible bg-teal-500">02</div>
            <div className="bg-teal-500">03</div>
          </div>
        </div>
      </div>

      <div className="text-white bg-slate-900 mb-2">
        <div className="container">
          <img
            className="w-64 h-64 object-none object-right-bottom"
            src="https://as1.ftcdn.net/v2/jpg/01/22/45/42/1000_F_122454272_3uT1sZUrm0qpOmRYcnnkc8bbbgMTkmFe.jpg"
            alt="image"
          />
        </div>
      </div>
    </>
  );
}
