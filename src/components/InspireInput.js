"use client";

import { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { getRandomPrompt } from "@/utils/utils";
export default function InspireInput(props) {
  const { handleSubmit, handleInputChange, inputValue, loading } = props;
  return (
    <form onSubmit={handleSubmit} className="h-4/6 w-full px-5">
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-row-reverse items-center justify-between">
          <BsFillArrowRightCircleFill
            onClick={handleSubmit}
            className="cursor-pointer"
            size={32}
          />
          <input
            id="message-input"
            onChange={handleInputChange}
            value={inputValue}
            className="w-full p-3 me-3 rounded-xl outline-none border-2 border-sky-200 focus:border-sky-400"
            type="text"
            placeholder={`Get Inspired! Try ${getRandomPrompt()}`}
            disabled={loading}
          />
        </div>
      </div>
    </form>
  );
}
