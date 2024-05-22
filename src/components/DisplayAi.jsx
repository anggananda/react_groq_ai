import React, { useState } from "react";
import { Light } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { requestGroqAi } from "../utils/groq";
import { IoIosSend } from "react-icons/io";

const DisplayAi = () => {
  const [reply, setReply] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await requestGroqAi(content.value);
    setReply(response);
  };
  return (
    <div className="flex flex-col gap-4 p-8 justify-center items-center">
      <h1 className="text-white text-4xl">Groq AI</h1>

      <div className="w-[60%] gap-4 flex flex-col">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="border border-white flex rounded-md bg-white p-1 relative">
            <input
              type="text"
              id="content"
              placeholder="send messages..."
              className="p-3 outline-none border-none w-full"
            />
            <button className="text-white flex justify-center items-center rounded-full bg-indigo-800 hover:bg-indigo-700 absolute right-[5px] h-[50px] w-[50px] shadow-md">
              <IoIosSend size={30} />
            </button>
          </div>
        </form>

        {reply ? (
          <div className="w-full">
            <Light language="swift" style={dracula} wrapLongLines={true} >
              {reply}
            </Light>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DisplayAi;
