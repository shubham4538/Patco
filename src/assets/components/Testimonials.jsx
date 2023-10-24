import React from "react";

function Testimonials() {
  return (
    <div id="testimonials" className="flex gap-10 bg-[#8e3ccb] py-10">
      {/* Left */}
      <div className="relative p-20 py-10">
        <div className="flex flex-col bg-white w-96 rounded-3xl p-5 items-center text-center">
          <img src="./2815428.png" alt="" className="w-16 h-16" />
          <div className="fontL text-sm italic mb-3">
            Video lectures form the crux of IIDE’s student & corporate training
            curriculums. So creating content matching global education standards
            is paramount. TRC promptly adapted to brand guidelines & delivered
            quality animation that brought our experts’ explanation to life.
          </div>
          <div>
            <div className="fontB text-base text-black">Bhumit Gor</div>
            <div className="fontL text-sm text-red-500">
              Co-Founder & Guitarist, Last Minute Band
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col flex-1">
        <div>
          <div className="fontB text-4xl text-amber-400">TESTIMONIALS</div>
          <div className="my-3 w-full relative">
            <hr className="w-full h-1 bg-[#fc59a3] border-0" />
            <span className="circle-left bg-[#fc59a3]"></span>
          </div>
        </div>
        <div className="fontB text-3xl text-white italic p-12 text-right">
          what they say about our passion?
        </div>
        <div className="flex justify-center gap-5">
          <span className="bg-[#fc59a3] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path
                fill="#fff"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
          </span>

          <span className="bg-[#fc59a3] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path
                fill="#fff"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
