import React, { useState } from "react";
import verticalArrow from "../../assets/icons/vertical-arrow-icon.png";
import tIcon from "../../assets/icons/t-icon.png";
const SelectInput = ({
  options,
  selectedValue,
  handleSelect,
  isSelect,
}: any) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handlePickOption = (item: any) => {
    setIsDropdownVisible(false);
    handleSelect(item);
  };
  return (
    <div className="w-full flex flex-col relative bg-[#171717]   text-[#FFFFFF] text-[16px] leading-6 pl-[12px] ">
      <div className="flex justify-between items-center w-full">
        {isSelect ? (
          <>
            <div
              className="cursor-pointer flex gap-x-[10px] items-center my-1 w-full"
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            >
              <img src={selectedValue.img} className="w-8" alt="" />
              <div> {selectedValue.value}</div>
            </div>
            <img
              src={verticalArrow}
              className={`w-6 ${isDropdownVisible ? "rotate-180" : ""}`}
              alt=""
            />
          </>
        ):(
            <div
            className="flex gap-x-[10px] items-center my-1 w-full"
          >
            <img src={tIcon} className="w-8" alt="" />
            <div> sUSDe</div>
          </div>
        )}
      </div>
      {isDropdownVisible && isSelect && (
        <div className="absolute top-[50px] w-full z-10">
          {options.map((item: any, index: any) => {
            return (
              <div
                className={`p-2 cursor-pointer w-full border border-[#ffffff33] bg-[#171717] ${
                  index === options.length - 1 && "rounded-b-lg"
                } ${index === 0 && "rounded-t-lg"}`}
                onClick={() => handlePickOption(item)}
              >
                <div> {item.value}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
