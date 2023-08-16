"use client";

import { useState, useEffect } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Tooltip from "./Tooltip";
import { useEdenAIContext } from "@/context/EdenAIContext";

export default function APIInput(props) {
  const [isHover, setIsHover] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { setEdenApiKey } = useEdenAIContext();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setEdenApiKey(e.target.value);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-full sm:max-w-[240px] flex flex-row-reverse items-center justify-between">
        <input
          id="message-input"
          onChange={handleInputChange}
          value={inputValue}
          className={`w-full p-3 me-3 rounded-xl outline-none border-2 border-sky-200 focus:border-sky-400`}
          type="text"
          placeholder={`Enter EdenAI API Key`}
        />
        <a
          className="relative cursor-pointer"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          href={"https://www.edenai.co/"}
          target="_blank"
          aria-label="Get an API Key"
        >
          <Tooltip visible={isHover} popoverText={"Get an API Key"} />
          <BsFillQuestionCircleFill size={24} className="mx-1 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
