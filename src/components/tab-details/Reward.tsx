import React, { useState } from "react"

function Reward({ ...props }) {
  const [openReward, setOpenReward] = useState(false)
  const data = [
    {
      name: "sonte.sould",
      key: "0xx....1545",
      reward: 100,
      rank: 4
    },
    {
      name: "sonte.sould",
      key: "0xx....1545",
      reward: 100,
      rank: 5
    },
    {
      name: "sonte.sould",
      key: "0xx....1545",
      reward: 100,
      rank: 6
    },
    {
      name: "sonte.sould",
      key: "0xx....1545",
      reward: 100,
      rank: 7
    },
    {
      name: "sonte.sould",
      key: "0xx....1545",
      reward: 100,
      rank: 8
    }
  ]

  return (
    <>
      {!openReward ? (
        <div className="grow flex flex-col gap-6">
          <div className="flex flex-row items-center">
            <img src={require("../../assets/icons/user-icon.png")} className="w-16 h-16" alt="" />
            <div className="grow text-center">
              <div className="font-orbitron font-semibold">Leader board</div>
              <div className="text-[13px] font-thin">Due to: 21 Apr, 2023 - 18:00</div>
            </div>
          </div>
          <div className="w-[203px] h-10 mx-auto relative z-20 cursor-pointer">
            <img
              src={require("../../assets/images/background/leaderboard-btn-bg.png")}
              className="w-[203px] h-10 absolute top-0 left-0 z-10 cursor-pointer"
              alt=""
              onClick={() => setOpenReward(true)}
            />
            <div className="w-full h-full flex">
              <span className="w-fit m-auto font-orbitron text-[12px] font-semibold pl-8">Leaderboard Reward</span>
            </div>
          </div>
          <div className="grow divide-y divide-gray-500 h-[250px] md:h-[330px] overflow-y-scroll">
            <div className="flex flex-row justify-between items-center h-16">
              <div className="flex flex-row gap-4 items-center">
                <div className="relative z-20 w-[20px] h-[21px] font-orbitron text-[10px] flex">
                  <img src={require("../../assets/icons/top1-bg-icon.png")} className="w-[20px] h-[21px] absolute z-10 top-0 left-0" alt="" />
                  <div className="m-auto relative z-30">1</div>
                </div>
                <div>
                  <div>Jade</div>
                  <div className="text-[12px] font-light">0xx....1245</div>
                </div>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <div>100</div>
                <img src={require("../../assets/icons/point-icon.png")} className="w-4 h-4" alt="" />
              </div>
            </div>

            <div className="flex flex-row justify-between items-center h-16">
              <div className="flex flex-row gap-4 items-center">
                <div className="relative z-20 w-[20px] h-[21px] font-orbitron text-[10px] flex">
                  <img src={require("../../assets/icons/top2-bg-icon.png")} className="w-[20px] h-[21px] absolute z-10 top-0 left-0" alt="" />
                  <div className="m-auto relative z-30">2</div>
                </div>
                <div>
                  <div>Snimaler</div>
                  <div className="text-[12px] font-light">0xx....1245</div>
                </div>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <div>100</div>
                <img src={require("../../assets/icons/point-icon.png")} className="w-4 h-4" alt="" />
              </div>
            </div>

            <div className="flex flex-row justify-between items-center h-16">
              <div className="flex flex-row gap-4 items-center">
                <div className="relative z-20 w-[20px] h-[21px] font-orbitron text-[10px] flex">
                  <img src={require("../../assets/icons/top3-bg-icon.png")} className="w-[20px] h-[21px] absolute z-10 top-0 left-0" alt="" />
                  <div className="m-auto relative z-30">3</div>
                </div>
                <div>
                  <div>Frigg's</div>
                  <div className="text-[12px] font-light">0xx....1245</div>
                </div>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <div>100</div>
                <img src={require("../../assets/icons/point-icon.png")} className="w-4 h-4" alt="" />
              </div>
            </div>

            {data.map((item, index) => {
              return (
                <div className="flex flex-row justify-between items-center h-16" key={index}>
                  <div className="flex flex-row gap-4 items-center">
                    <div className="relative z-20 w-[20px] h-[21px] font-orbitron text-[10px] flex">
                      <img src={require("../../assets/icons/top-bg-icon.png")} className="w-[20px] h-[21px] absolute z-10 top-0 left-0" alt="" />
                      <div className="m-auto relative z-30">{item.rank}</div>
                    </div>
                    <div>
                      <div>{item.name}</div>
                      <div className="text-[12px] font-light">{item.key}</div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 items-center divide">
                    <div>{item.reward}</div>
                    <img src={require("../../assets/icons/point-icon.png")} className="w-4 h-4" alt="" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="grow md:pt-4 flex flex-col gap-4 md:gap-6">
          <div className="font-orbitron flex items-center">
            <img
              src={require("../../assets/icons/back-icon.png")}
              alt=""
              className="cursor-pointer w-4 h-4"
              onClick={() => setOpenReward(false)}
            />
            <div className="m-auto font-medium">Leaderboard Reward</div>
          </div>
          <img src={require("../../assets/images/reward.png")} className="w-[212px] h-[212px] mx-auto" alt="" />
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex flex-row justify-between bg-[#131313] bg-opacity-[13%] p-[10px] rounded-[8px]">
              <div className="text-[11px] font-light">Top 1-5 players</div>
              <div className="text-[11px] font-bold">02 OX - Node Key</div>
            </div>
            <div className="flex flex-row justify-between bg-[#131313] bg-opacity-[13%] p-[10px] rounded-[8px]">
              <div className="text-[11px] font-light">Top 6-10 players</div>
              <div className="text-[11px] font-bold">01 OX - Node Key</div>
            </div>
            <div className="flex flex-row justify-between bg-[#131313] bg-opacity-[13%] p-[10px] rounded-[8px]">
              <div className="text-[11px] font-light">Top 11-20 players</div>
              <div className="text-[11px] font-bold">a 17% referral bonus increase</div>
            </div>
            <div className="text-[13px] text-center font-light">A new leaderboard will be created every week</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Reward;
