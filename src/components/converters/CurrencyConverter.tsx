import React, { useState } from "react";
import checkedIcon from "../../assets/icons/checked-icon.png";
import SelectInput from "../inputs/SelectInput";
import tIcon from "../../assets/icons/t-icon.png";
import convertArrow from "../../assets/images/convert-arrow.png";
const CurrencyConverter = (props: any) => {
  const navbarOptions = ["Stake", "Unstake", "Claim"];
  const [currentOption, setCurrentOption] = useState("Stake");
  const [selectedOption, setSelectedOption] = useState({
    value: "USDe",
    img: tIcon,
  });

  const options = [
    { value: "USDe", img: tIcon },
    { value: "USDe", img: tIcon },
    { value: "USDe", img: tIcon },
    // Add more options as needed
  ];
  return (
    <div className="max-w-[760px] w-full my-[100px] rounded-2xl border border-[#ffffff33] p-8 bg-[#171717] font-ginora">
      {props.type === "Stake"?( <div className="flex justify-between items-center">
        
        <div className="flex rounded-[100px] border border-[#ffffff33] ">
          {navbarOptions.map((item, index) => {
            return (
              <div
                className={`${
                  index < navbarOptions.length - 1 &&
                  "border-r border-[#ffffff33]"
                } ${
                  currentOption === item && "bg-[#297fd01a] text-[#6EBCF4]"
                } ${index === 0 && "rounded-l-[100px]"} ${
                  index === navbarOptions.length - 1 && "rounded-r-[100px]"
                }
                text-[#ffffffba] text-[14px] font-medium leading-[20px] py-[10px] min-w-[104px] flex justify-center items-center gap-x-2 cursor-pointer text-center`}
                onClick={() => setCurrentOption(item)}
              >
                {item === currentOption && (
                  <img src={checkedIcon} className="w-[14px]" alt="" />
                )}
                <div>{item}</div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center gap-x-2 px-[10px] py-1 font-inter bg-[#ffffff0a] rounded">
          <div className="text-[#ffffff66] text-[12px]">sUSDe APY</div>
          <div className="font-semibold text-[12px]">33.3%</div>
        </div>
      </div>):(<div className="text-[44px] leading-[50px] font-ginora text-[#FFFFFF]">Buy USDe</div>)}
     
      <div className="mt-6 mb-2 flex flex-col gap-y-5">
        <div className="font-semibold text-[16px] leading-[24px]">
          You {currentOption}
        </div>
        <div className="flex border border-[#ffffff33]  rounded-[4px]  px-4 items-center field bg-[#171717]">
          <div className="min-w-[70%] relative border-r border-r-[#ffffff33] py-2">
            <div className="absolute -top-4 bg-[#171717] text-[12px] leading-4 w-fit">
              Enter quantity
            </div>
            <input
              type="number"
              className="bg-[#171717] outline-none  text-[#FFFFFF] placeholder-white text-[20px]  leading-6"
              placeholder="0.0"
            ></input>
          </div>
          <div className="relative w-full py-2">
            <div className="absolute -top-2 bg-[#171717] text-[12px] leading-4 w-fit ml-4">
              Select
            </div>
            <SelectInput
              label="Choose an option"
              options={options}
              selectedValue={selectedOption}
              handleSelect={setSelectedOption}
              type={currentOption}
              isSelect={props.type === "Stake" ? false : true}
            />
          </div>
        </div>
        {currentOption !== "Claim" && (
        <div className="w-full flex justify-center mt-1">
          <img src={convertArrow} className="w-8" alt="" />
        </div>)}
      </div>
      {currentOption !== "Claim" && (
        <>
        <div className="font-semibold text-[16px] leading-[24px]">
        You Receive
      </div>
      <div className="flex border border-[#ffffff33]  rounded-[4px] mt-6 px-4 items-center field bg-[#171717]">
        <div className="min-w-[70%] relative border-r border-r-[#ffffff33] py-2">
          <div className="absolute -top-4 bg-[#171717] text-[12px] leading-4 w-fit">
            Enter quantity
          </div>
          <input
            type="number"
            className="bg-[#171717] outline-none  text-[#FFFFFF] placeholder-white text-[20px]  leading-6"
            placeholder="0.0"
          ></input>
        </div>
        <div className="relative w-full py-2">
          <div className="absolute -top-2 bg-[#171717] text-[12px] leading-4 w-fit ml-4">
            Select
          </div>
          <SelectInput
            label="Choose an option"
            options={options}
            selectedValue={selectedOption}
            handleSelect={setSelectedOption}
            type={currentOption}
            isSelect={props.type === "Stake" ? false : true}
          />
        </div>
       
      </div></>
      )}
      
      <div className="text-[#ffffffba] leading-4 text-[14px] flex justify-between w-full items-center opacity-[0.38] mt-5">
            <div>Max Slippage: 0.10%</div>
            <div>Gas: $17.71</div>
        </div>
        <div className="bg-[#2980D0] cursor-pointer text-center mt-8 px-6 py-3 rounded-[100px] tracing-[0.6] font-ginora text-[15px] font-medium">Connect Wallet</div>
    </div>
  );
};
export default CurrencyConverter;
