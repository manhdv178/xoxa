import React from "react";

function Refferal({ ...props }) {
  const userIcon = require("../../assets/icons/user-icon.png");
  const copyIcon = require("../../assets/icons/copy-icon.png");
  const refferalData: any = [

  ];
  const buttonBg = require("../../assets/images/background/claim-button-bg.png");
  const pointIcon = require("../../assets/icons/point-icon.png");
  const arrowIcon = require("../../assets/icons/arrow-icon.png");
  return (
    <>
      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-1 items-center justify-center">
          <img src={userIcon} className="w-16 h-16" alt="user-icon" />
          <div className="font-semibold font-orbitron text-[15px] text-center leading-6">
            Invite friend to earn Credits and OXpoints together!
          </div>
        </div>
        <div className="text-center font-manrope text-xs">
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
      <div className="text-center font-manrope text-base leading-6 text-[#D9D9D9]">
        How to earn referral reward?
      </div>
      <div>
        <div className="border border-[#656565] rounded-xl p-4 flex flex-col gap-y-2">
          <div className="grid grid-cols-2 px-2 ">
            <div className="font-maven text-[12px]">Invitee</div>
            <div className="font-maven text-[12px]">Activity</div>
          </div>
          <div className="max-h-[112px] overflow-auto">
            {refferalData.length > 0 ? (refferalData.map((item: any, index: any) => {
              return (
                <div
                  className="grid grid-cols-2 px-2 py-2 border-y-[1px] border-y-[#656565]"
                  key={index}
                >
                  <div className="font-maven text-[12px]">{item.invitee}</div>
                  <div className="flex items-center justify-start gap-x-2">
                    <img src={pointIcon} className="w-4 h-4" alt="point-icon" />
                    <div className="font-maven text-[12px]">{item.activity}</div>
                  </div>
                </div>
              );
            })) : (
              <div
                className="w-full flex items-center justify-center px-2 py-2 border-y-[1px] border-y-[#656565]"

              >
                <div className="font-maven text-[12px] text-[#ffffff33] leading-[14px]">No friends are currently connected.</div>

              </div>
            )}
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex flex-col gap-y-[10px] font-maven text-sm">
              <div className="flex items-center justify-start  gap-x-1">
                <div className="text-[#9C9C9C]">Total invitees: </div>
                <div className="font-semibold">{refferalData.length > 0 ? 2 : 0}</div>
              </div>
              <div className="flex items-center justify-start gap-x-1">
                <div className="text-[#9C9C9C]">Total credits: </div>
                <div className="flex items-center justify-between gap-x-1">
                  <img src={pointIcon} className="w-4 h-4" alt="point-icon" />
                  <div className="font-semibold">{refferalData.length > 0 ? '23,790' : 0}</div>
                </div>
              </div>
            </div>
            {refferalData.length > 0 && (
              <div className="relative cursor-pointer">
                <img
                  className="max-w-[62px] max-h-[31px] w-full"
                  src={buttonBg}
                  alt="button-bg"
                ></img>
                <div className="absolute top-[8px] left-[10px] tracking-[1.5px] font-orbitron font-semibold text-[12px] leading-4 z-50">
                  Claim
                </div>
              </div>
            )}

          </div>
        </div>
        <div className="flex items-center justify-center gap-x-[10px] cursor-pointer mt-3" onClick={() => props.setCurrrentNav('claim')}>
          <div className="font-manrope text-base">Claim history</div>
          <img src={arrowIcon} className="w-4 h-4 " alt="arrow-right" />
        </div>
      </div>
    </>
  );
}

export default Refferal;
