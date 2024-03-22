import React, { useState } from "react";

function RefferalCode({ ...props }) {
  const [input, setInput] = useState("");
  const advertisement = require("../../assets/images/advertisement.png");
  return (
    <div className="flex flex-col justify-between items-center gap-5 md:gap-12 py-16 md:py-[123px] w-full px-8">
      <div className="flex flex-col gap-y-4 justify-center items-center w-full">
        <img
          src={advertisement}
          className="w-[108px] h-[108px]"
          alt="advertisement"
        ></img>
        <div className="font-orbitron text-[20px] leading-[22px] font-semibold text-center">
          Create your refferal code
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-4">
        <input
          placeholder="Enter promo code"
          className="border border-white rounded-lg bg-transparent px-6 py-3 min-w-full"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          onClick={() => props.setCurrentStep("create name")}
          disabled={input.length === 0}
          className={`flex cursor-pointer w-full gap-x-2  py-[14px] rounded-lg items-center justify-center bg-gradient-to-r from-[#9E00FF] to-[#5F0099] ${
            input.length === 0 ? "opacity-20" : ""
          }`}
        >
          <div className="font-orbitron font-semibold text-[16px] leading-5 text-[#FFFFFF]">
            Submit
          </div>
        </button>
      </div>
      <div className="font-manrope text-[16px] leading-6 text-[#D9D9D9] cursor-pointer">
        How to find invitation code?
      </div>
    </div>
  );
}

export default RefferalCode;
