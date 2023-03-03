import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    let finalText = text.toUpperCase();
    setText(finalText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="hero-container container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-[#5e6572] lg:text-4xl">
            Make Your Text Simplify
          </h1>
          <p className="my-6 text-[#5e6572]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>
        </div>
        <div className="container">
          <div className="flex justify-center">
            <div
              className="relative mb-3 w-1/2 h-96 border"
              data-te-input-wrapper-init
            >
              <textarea
                className="peer block h-full w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea1"
                rows="3"
                value={text}
                onChange={handleOnChange}
                placeholder="Your message"
              />
            </div>
          </div>
          <a
            onClick={handleOnClick}
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#ffd400] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#ffd400]"></span>
            <span className="relative text-black group-hover:text-black">
              Button Text
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
