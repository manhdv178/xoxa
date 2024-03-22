import React from "react";

function Airdrop({ ...props }) {
  const userIcon = require("../../assets/icons/user-icon.png");
  const copyIcon = require("../../assets/icons/copy-icon.png");

  return (
    <>
      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-1 items-center justify-center">
          <img src={userIcon} className="w-16 h-16" alt="user-icon" />
          <div className="font-semibold font-orbitron text-[15px] text-center leading-6">
            Invite friend to earn Credits and OXpoints together!
          </div>
        </div>
        <div className="text-center font-manrope text-xs leading-4">
          Get 500 OXpoints for every friend you invite who joins in!
        </div>
      </div>
      <div className="h-fit flex">
        <div className="m-auto flex cursor-pointer max-w-[286px] max-h-[48px] w-full gap-x-2 px-6 py-[14px] rounded-[100px] items-center justify-center bg-gradient-to-r from-[#9E00FF] to-[#5F0099]">
          <img src={copyIcon} className="w-[22px] h-5" alt="x-icon" />
          <div
            className="font-orbitron font-semibold text-sm md:text-[16px] leading-5 text-[#FFFFFF]"
            onClick={() => { }}
          >
            Copy your promo code
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 h-[230px] md:h-[310px] overflow-y-scroll">
        <div className="w-full text-[12px] flex flex-row items-center justify-between px-[6px] py-3 md:px-3 md:py-4 border border-gray-500 rounded-[4px]">
          <div className="flex flex-row gap-2 items-center">
            <img src={require("../../assets/icons/x-icon.png")} className="w-[11px] h-[10px]" alt="" />
            <div className="text-[11px]">Follow @OXOA on X</div>
          </div>
          <div className="flex flex-row justify-end gap-[6px] items-center min-w-[107px] font-semibold">
            <img src={require("../../assets/icons/point-icon.png")} className="w-4 h-4" alt="" />
            <div>+50 points</div>
            <img src={require("../../assets/icons/checked-icon.png")} className="w-4 h-4" alt="" />
          </div>
        </div>

        <div className="text-[12px] flex flex-row items-center justify-between px-[6px] py-3 md:px-3 md:py-4 border border-gray-500 rounded-[4px]">
          <div className="flex flex-row gap-2 items-center">
            <img src={require("../../assets/icons/x-icon.png")} className="w-[11px] h-[10px]" alt="" />
            <div className="text-[11px]">Retweet OXOA’s airdrop tweet on X</div>
          </div>
          <div className="flex flex-row justify-end gap-[6px] items-center min-w-[107px] font-semibold">
            <img src={require("../../assets/icons/point-icon.png")} className="w-4 h-4" alt="" />
            <div>+50 points</div>
            <img src={require("../../assets/icons/checked-icon.png")} className="w-4 h-4" alt="" />
          </div>
        </div>

        <div className="text-[12px] px-[6px] py-3 md:px-3 md:py-4 border border-gray-500 rounded-[4px]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <img src={require("../../assets/icons/arrow-down-icon.png")} className="w-[8px] h-[4px]" alt="" />
              <div className="text-[11px]">Daily task</div>
            </div>
            <div className="flex flex-row justify-end gap-[6px] items-center min-w-[107px]">
              <img src={require("../../assets/icons/point-icon.png")} className="w-4 h-4" alt="" />
              <div><span className="font-semibold">+50 points</span>&nbsp;<span>/ 1 mission</span></div>
              <img src={require("../../assets/icons/rotate-right.png")} className="w-[12.5px] h-[14.5px]" alt="" />
            </div>
          </div>
          <div className="mt-2">
            <div>Comments with hastags:</div>
            <div className="flex flex-row items-center gap-2 font-bold">
              <div>#OXOA #OXOANetwork #OXNode</div>
              <img src={require("../../assets/icons/copy-icon.png")} className="w-4 h-4" alt="" />
            </div>
            <div className="font-light">Limit of 100 mentions/day</div>
          </div>
        </div>

        <div className="text-[12px] flex flex-row items-center justify-between px-[6px] py-3 md:px-3 md:py-4 border border-gray-500 rounded-[4px]">
          <div className="flex flex-row gap-2 items-center">
            <img src={require("../../assets/icons/add-user-icon.png")} className="w-[11px] h-[10px]" alt="" />
            <div className="text-[11px]">Referral friends</div>
          </div>
          <div className="flex flex-row justify-end gap-[6px] items-center min-w-[107px] font-semibold">
            <img src={require("../../assets/icons/point-icon.png")} className="w-4 h-4" alt="" />
            <div>+500 points</div>
            <img src={require("../../assets/icons/rotate-right.png")} className="w-[12.5px] h-[14.5px]" alt="" />
          </div>
        </div>

        <div className="text-[12px] flex flex-row items-center justify-between px-[6px] py-3 md:px-3 md:py-4 border border-gray-500 rounded-[4px]">
          <div className="flex flex-row gap-2 items-center">
            <img src={require("../../assets/icons/add-user-icon.png")} className="w-[11px] h-[10px]" alt="" />
            <div className="text-[11px]">Referral friends</div>
          </div>
          <div className="flex flex-row justify-end gap-[6px] items-center min-w-[107px] font-semibold">
            <img src={require("../../assets/icons/point-icon.png")} className="w-4 h-4" alt="" />
            <div>+500 points</div>
            <img src={require("../../assets/icons/checked-icon.png")} className="w-4 h-4" alt="" />
          </div>
        </div>

      </div>
    </>
  );
}

export default Airdrop;
