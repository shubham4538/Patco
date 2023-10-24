import React from "react";
import "../styles/style.css";

function About() {
  return (
    <div id="about" className="pt-24 bg-[#3853a4]">
      <div className="p-20 flex flex-col gap-16">
        <div className="flex gap-14">
          {/* Left */}
          <div className="flex-1 flex flex-col text-right items-end">
            <span className="fontM text-white text-xl">ABOUT US</span>
            <div className="my-3 w-2/5 relative">
              <hr className="w-full h-1 bg-red-500 border-0" />
              <span className="circle bg-[#fb4646]"></span>
            </div>
            <span className="fontB text-amber-400 text-md mb-3">
              “Delivering Stunning <br />
              Visual Narratives”
            </span>
            <span className="fontL text-white text-[12px] italic">
              From concept to final edit, we tailor our production process to
              suit your unique needs, ensuring the highest quality results.
            </span>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col">
            <span className="fontL text-white text-[12px] italic">
              <span className="fontM text-amber-400 text-[12px] not-italic">
                PATCO PRODUCTIONS
              </span>{" "}
              has earned its reputation in the market for its services. We aim
              to grow as the most prominent firm for our Customers, Business
              Associates & Stakeholders and we take pride that the intense
              vision of our experienced personnel encourages us to create a
            </span>
            <span className="fontB text-white text-md mt-3">OUR STORY</span>
            <div className="my-3 w-2/5 relative">
              <hr className="w-full h-1 bg-red-500 border-0" />
              <span className="circle-left bg-[#fb4646]"></span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span
            className="fontB text-9xl text-[#4b62a7]"
            style={{ textShadow: "0px 3px 2px #3c455a" }}
          >
            about
          </span>
        </div>
      </div>
    </div>
  );
}
export default About;
