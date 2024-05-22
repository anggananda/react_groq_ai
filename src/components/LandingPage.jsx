import React from "react";
import Particles from "react-particles";
import { particlesInilization } from "../utils/particles";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Particles init={particlesInilization} options={{ preset: "links" }} />
      <div className="flex justify-center items-center h-[100dvh]">
        <div className="z-50">
          <div className="flex justify-center items-center gap-4 flex-col">
            <div>
              <ReactTyped
                strings={["WELLCOME TO MY WEBSITE", "ENJOY USING AI"]}
                className="text-white font-bold text-2xl"
                loop
                typeSpeed={60}
                backSpeed={100}
                showCursor={false}
              />
            </div>

            <Link
              to="chat"
              className="text-white font-bold px-4 py-2 rounded-md bg-indigo-800 hover:bg-indigo-600"
            >
              Use It
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
