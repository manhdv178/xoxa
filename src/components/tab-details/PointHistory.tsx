import React from "react";

function PointHistory({ ...props }) {
  const arrowIcon = require("../../assets/icons/arrow-icon.png");
  const downloadIcon = require("../../assets/icons/download-icon.png");
  const pointIcon = require("../../assets/icons/point-icon.png");
  const PointHistoryData = [
    { title: "Claim", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Airdrop", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Leaderboard", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Claim", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Claim", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Referral", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Claim", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Claim", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Claim", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Claim", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Claim", time: "21 Apr, 2023 -18:00:20", amount: 100 },
    { title: "Claim", time: "21 Apr, 2023 -18:00:20", amount: 100 },
  ]

  const getIcon = (type: string) => {
    let src = ""
    if (type === 'Airdrop') {
      src = require("../../assets/icons/weather-icon.png")
    } else if (type === 'Leaderboard') {
      src = require("../../assets/icons/report-outline.png")
    } else if (type === 'Referral') {
      src = require("../../assets/icons/team-outline.png")
    } else {
      src = require("../../assets/icons/download-icon.png")
    }
    return src
  }

  return (
    <>
      <div className="flex items-center justify-between gap-x-1">
        <img
          src={arrowIcon}
          className="rotate-180 w-4 h-4 self-center cursor-pointer"
          alt="arrow-icon"
          // onClick={() => props.setCurrrentNav('refferal')}
        />
        <div className="font-orbitron text-base font-semibold self-center">
          Claim history
        </div>
        <div className="w-4"></div>
      </div>

      <div className="overflow-y-scroll h-[450px] md:h-[530px]">
        {PointHistoryData.map((item, index) => {
          return (
            <div className="flex justify-between items-center py-2 border-b border-b-[#656565]" key={index}>
              <div className="flex justify-start items-center gap-x-4">
                <img
                  src={item.title ? getIcon(item.title) : ""}
                  className="w-6 h-6"
                  alt="download-icon"
                />
                <div className="font-manrope">
                  <div className="text-base">{item.title}</div>
                  <div className="text-[12px] leading-6">{item.time}</div>
                </div>
              </div>
              <div className="flex gap-x-1 items-center">
                <div className="font-maven font-semibold text-sm">
                  {item.amount}
                </div>
                <img src={pointIcon} className="w-4 h-4" alt="download-icon" />
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
}

export default PointHistory;
