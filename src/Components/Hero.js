import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-container container px-6 py-16 mx-auto text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-[#5e6572] lg:text-4xl">
          Make Your Text Simplify
        </h1>
        <p className="my-6 text-[#5e6572]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          similique obcaecati illum mollitia.
        </p>
        <Link
          to="/editor"
          className="px-6 py-2.5 text-sm font-medium leading-5 text-center text-[#5e6572] hover:text-black transition-all bg-[#ffd400] rounded-lg hover:bg-[#ffe566] lg:mx-0 lg:w-auto focus:outline-none"
        >
          Start 14-Day free trial
        </Link>
      </div>
    </div>
  );
}
