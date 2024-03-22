import React, { useState } from "react";
import Refferal from "../components/tab-details/Refferal";
import ClaimHistory from "../components/tab-details/ClaimHistory";
import Airdrop from "../components/tab-details/Airdrop";
import Reward from "../components/tab-details/Reward";
import PointHistory from "../components/tab-details/PointHistory";

function Home() {
  const [currentNav, setCurrrentNav] = useState("refferal");
  const renderComponent = () => {
    switch (currentNav) {
      case "airdrop":
        return <Airdrop />;
      case "refferal":
        return <Refferal setCurrrentNav={setCurrrentNav} />;
      case "claim":
        return <ClaimHistory setCurrrentNav={setCurrrentNav}/>;
      case "reward":
        return <Reward />;
        case "point":
          return <PointHistory />;
      default:
        return <Refferal />;
    }
  };
  return (
    <div className="w-full h-full flex text-[#fff] font-manrope">
      <div className="w-[800px] h-full m-auto flex flex-row justify-between items-center py-10 md:py-[60px]">
        <div className="h-full md:flex hidden ">
          <img
            src={require("../assets/images/arrow-left.png")}
            className="w-[146.3px] h-[395.3px] my-auto"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center m-auto">
          <img
            src={require("../assets/images/logo.png")}
            className="w-[220px] h-10"
            alt=""
          />
          <div className="w-[330px] h-[594px] md:w-[380px] md:h-[684px] mt-[55px] relative z-10 p-[1.5px]">
            <img
              src={require("../assets/images/background/mobile-bg.png")}
              alt=""
              className="w-full h-full absolute z-10 top-0 left-0"
            />
            <div className="relative z-30 w-[326px] h-[590px] md:w-[376px] md:h-[680px] m-auto flex flex-col justify-between">
              <div className="px-4 py-3 flex flex-row justify-between border-b border-[#425667] border-dashed">
                <div className="flex flex-row gap-[10px]">
                  <img
                    src={require("../assets/icons/avatar.png")}
                    className="w-6 h-6"
                    alt=""
                  />
                  <div>@oxoamember</div>
                </div>
                <div className="flex flex-row gap-[10px]">
                  <img
                    src={require("../assets/icons/point-icon.png")}
                    className="w-6 h-6"
                    alt=""
                  />
                  <div className="flex flex-row items-center gap-1">
                    <span>123456</span>
                    <span className="text-[9px] font-light">points</span>
                  </div>
                </div>
              </div>
              <div className="grow px-4 pt-4 flex flex-col gap-6">
                {renderComponent()}
              </div>
              {currentNav !== "claim" && currentNav !== "point" && (
                <div className="flex flex-row h-fit">
                  <div
                    onClick={() => setCurrrentNav("refferal")}
                    className={`w-1/3 h-[70px] md:h-[90px] flex flex-col items-center justify-center gap-[6px] md:gap-2 text-textGray font-light text-sm md:text-base ${
                      currentNav === "refferal"
                        ? "bg-[#2e2055]"
                        : "bg-bgPrimary"
                    } rounded-bl-[12px] cursor-pointer`}
                  >
                    <img
                      src={require("../assets/icons/referral-icon.png")}
                      className="w-8 h-8"
                      alt=""
                    />
                    <div>Referral</div>
                  </div>
                  <div
                    onClick={() => setCurrrentNav("airdrop")}
                    className={`w-1/3 h-[70px] md:h-[90px] flex flex-col items-center justify-center gap-[6px] md:gap-2 text-textGray font-light text-sm md:text-base ${
                      currentNav === "airdrop" ? "bg-[#2e2055]" : "bg-bgPrimary"
                    } cursor-pointer`}
                  >
                    <img
                      src={require("../assets/icons/airdrop-icon.png")}
                      className="w-8 h-8"
                      alt=""
                    />
                    <div>Airdrop</div>
                  </div>
                  <div
                    onClick={() => setCurrrentNav("reward")}
                    className={`w-1/3 h-[70px] md:h-[90px] flex flex-col items-center justify-center gap-[6px] md:gap-2 text-textGray font-light text-sm md:text-base ${
                      currentNav === "reward" ? "bg-[#2e2055]" : "bg-bgPrimary"
                    } rounded-br-[12px] cursor-pointer`}
                  >
                    <img
                      src={require("../assets/icons/reward-icon.png")}
                      className="w-8 h-8"
                      alt=""
                    />
                    <div>Reward</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-full md:flex hidden">
          <img
            src={require("../assets/images/arrow-right.png")}
            className="w-[146.3px] h-[395.3px] my-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
