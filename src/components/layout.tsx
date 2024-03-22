/* eslint-disable */
import { useCallback, useEffect, useState, useRef } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import xstore from "../components/xstore";
import ee from "../components/ee";

declare var window: any;

let lastMessageTimeout: any = null;

const Layout = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<any>({
    text: "",
    type: "", //error,warning,success,info
    timeout: 1000,
  });
  const { children } = props;

  const showMessage = (text: any, type: any = "info", timeout: any = 5000) => {
    if (lastMessageTimeout) {
      clearTimeout(lastMessageTimeout);
    }
    setMessage({
      text,
      type,
      timeout,
    });
    lastMessageTimeout = setTimeout(() => {
      setMessage({
        text: "",
      });
      clearTimeout(lastMessageTimeout);
    }, timeout);
  };

  const pageLoadingChanged = (data: any) => {
    setLoading(data);
  };

  const pageMessageChanged = (data: any) => {
    if (typeof data === "string") {
      showMessage(data, "info", 5000);
      return;
    }
    showMessage(data?.text, data?.type, data?.timeout);
  };

  useEffect(() => {
    ee.on("page-loading", pageLoadingChanged);
    ee.on("page-message", pageMessageChanged);
    return () => {
      ee.remove("page-loading", pageLoadingChanged);
      ee.remove("page-message", pageMessageChanged);
    };
  }, []);

  return (
    <>
      <div>
        <header></header>
          <div className="flex flex-col justify-center min-h-screen items-center overflow-y-auto">
            <Outlet />
          </div>
        <footer></footer>
      </div>
      {message?.text && (
        <div className="fixed bottom-[15px] left-[15px] z-[1000] p-[8px_5px_5px_5px] text-white bg-black text-[85%] px-[12px] rounded-[5px]">
          <span className={message.type === "error" ? "error" : ""}>
            &nbsp;
            {message.text}
          </span>
        </div>
      )}
    </>
  );
};

export default Layout;
