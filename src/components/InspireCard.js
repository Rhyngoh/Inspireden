"use client";

import { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import InspireInput from "./InspireInput";
import InspireImage from "./InspireImage";
import { GridLoader } from "react-spinners";
import { useEdenAIContext } from "@/context/EdenAIContext";

export default function InspireCard(props) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { edenApiKey } = useEdenAIContext();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    if (!inputValue) return;
    if (loading) return;
    e.preventDefault();

    // fetch data from server
    setLoading(true);
    let response = await fetch("/api/inspire", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: inputValue, apiKey: edenApiKey }),
    });
    let data = await response.json();
    console.log("data", data);
    if (data?.openai?.items[0]) {
      setImage(data.openai.items[0]);
    }

    // setInputValue('');

    setLoading(false);
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center relative h-full gap-4 max-w-full">
        {loading && (
          <div className="w-full h-full z-2 flex justify-center items-center absolute top-0 left-0">
            <div className="h-full w-full bg-white bg-opacity-50 blur-md absolute"></div>
            <GridLoader color="#36d7b7" size={24} />
          </div>
        )}
        <InspireInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <InspireImage image={image} />
      </section>
    </>
  );
}
