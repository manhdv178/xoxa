import React, { useState } from "react";
import Welcome from "../components/login/Welcome";
import CreateName from "../components/login/CreateName";
import RefferalCode from "../components/login/RefferalCode";
function Login() {

  const [currentStep, setCurrentStep] = useState('start')
  const renderComponent = () =>{ switch (currentStep) {
    case 'start':
      return <Welcome setCurrentStep = {setCurrentStep}/>
    case 'refferal':
      return <RefferalCode setCurrentStep = {setCurrentStep}/>
    case 'create name':
      return <CreateName setCurrentStep = {setCurrentStep}/>
    default:
      return <Welcome/>
  }}
  return (
    <div className="w-full h-full flex text-[#fff] font-manrope overflow-auto">
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
            <div className="relative z-30 w-[326px] h-[590px] md:w-[376px] md:h-[680px] rounded-[12px] m-auto ">
            {renderComponent()}
            </div>
          </div>
        </div>
        <div className="h-full md:flex hidden ">
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

export default Login;
