import React from "react";

function Welcome({ ...props }) {
  const reward = require("../../assets/images/reward.png");
  const xIcon = require("../../assets/icons/x-icon.png");
  const buttonBg = require("../../assets/images/dark-bg.png");
  return (
    <div className="flex flex-col justify-between items-center gap-5 md:gap-12 py-10 md:py-[72px] ">
      <div className="font-orbitron font-bold text-[20px] leading-[30px] text-center">
        Play and get <br />
        instant rewards <br /> the fun way to win goodies!
      </div>
      <img src={reward} className="w-[212px] h-[212px]" alt="reward"></img>

      <div className="flex flex-col justify-center items-center gap-y-3">
        <div className="flex cursor-pointer max-w-[247px] max-h-[48px] w-full gap-x-2 px-6 py-[14px] rounded-[100px] items-center justify-center bg-gradient-to-r from-[#9E00FF] to-[#5F0099]">
          <img src={xIcon} className="w-[22px] h-5" alt="x-icon" />
          <div
            className="font-orbitron font-semibold text-[16px] leading-5 text-[#FFFFFF]"
            onClick={() => props.setCurrentStep("refferal")}
          >
            Login with Twitter
          </div>
        </div>
        <div className="font-orbitron font-semibold text-[16px] leading-5 text-white">
          or
        </div>
        <div className="relative cursor-pointer">
          <img
            className="max-w-[247px] max-h-[48px] w-full"
            src={buttonBg}
            alt="button-bg"
          ></img>
          <div className="absolute top-[12px] left-[32px] font-orbitron font-semibold text-[16px] leading-5 z-50">
            Connect your wallet
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
