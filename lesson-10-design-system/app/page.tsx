export default function Home() {
  return (
    <>
      <div>
        <h1>This is a title</h1>
        <h2>This is a subtitle</h2>
        <p>This is a paragraph</p>
        <a href="https://www.google.com/">This is a an anchor</a>
      </div>

      <div>
        <button className="btn btn-primary">This is a button</button>
        <button className="btn btn-secondary">
          This is a secondary button
        </button>
        <button disabled className="btn btn-primary">
          disabled button
        </button>
      </div>
      <div className="my-2">
        <input className="outline-none" type="text" placeholder="text" />
      </div>
      <div className="my-2">
        <input className="outline-none" type="number" placeholder="number" />
      </div>
      <div className="my-2">
        <input className="outline-none" type="email" placeholder="email" />
      </div>
      <div className="my-2">
        <input
          disabled
          className="outline-none"
          type="text"
          placeholder="disabled"
        />
      </div>
      <div className="my-2">
        <input className="outline-none" type="date" />
      </div>

      <div className="my-2">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">
          Checkbox - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod, eos cumque! Minima accusantium impedit necessitatibus natus ex
          molestiae aperiam, commodi iusto incidunt rerum porro doloribus
          veritatis! Nisi pariatur natus recusandae repellendus excepturi, quasi
          perspiciatis, quos eos consequatur et dolorum adipisci at itaque
          praesentium eaque optio, eius nesciunt aut voluptatibus culpa!
        </label>
      </div>

      <div className="my-2">
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>

      <div className="my-2">
        <div className="customClassText">
          <div>customClassText</div>
        </div>
      </div>

      <div className="my-2">
        <h1 className="text-3xl">List Example</h1>
        <ul className="list-disc pl-4">
          {/* Use "list-disc" to style list markers as filled circles */}
          <li className="text-base">Item 1</li>
          <li className="text-base">Item 2</li>
          <li className="text-base">Item 3</li>
        </ul>
      </div>

      <div>
        <h1>This is another title</h1>
      </div>
    </>
  );
}
