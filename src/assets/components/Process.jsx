import React from "react";

function Process() {
  return (
    <div id="process" className="p-20 bg-[#d93b5b]">
      <div className="">
        {/* Top */}
        <div>
          <span className="fontM text-white text-2xl">
            OUR CREATIVE VIDEO PRODUCTION PROCESS
          </span>
          <div className="my-3 w-2/3 relative">
            <hr className="w-full h-1 bg-amber-400 border-0" />
            <span className="circle-left bg-amber-400"></span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex gap-20 py-10">
          <span className="flex-1 fontM text-white text-[11px] text-justify processes relative">
            <div className="fontB text-base leading-[1] mb-2 text-left">
              SCRIPTING AND STORY BOARDING:
            </div>
            Crafting compelling scripts and detailed storyboards that breathe
            life into your vision. With our Transforming ideas into captivating
            stories through expert scripting and meticulous storyboarding. Every
            word and frame is carefully crafted to captivate and engage your
            audience. Trust us to bring your vision to life with precision and
            creativity. Elevate your project with our comprehensive scripting
            and storyboarding services.
          </span>
          <span className="flex-1 fontM text-white text-[11px] text-justify processes relative">
            <div className="fontB text-base leading-[1] mb-2 text-left">
              PRE-PRODUCTION AND SHOOT:
            </div>
            We focus on key elements to ensure a seamless shoot or video
            production. Our experienced team conducts thorough location scouting
            to find captivating settings that align with your creative vision.
            With a team of skilled professionals and state-of-the-art equipment,
            we ensure a seamless and high-quality production experience. During
            production, we meticulously execute the plans and creative concepts
            developed during pre-production. Post production: In the
            post-production phase, we bring
          </span>
          <span className="flex-1 fontM text-white text-[11px] text-justify processes relative">
            <div className="fontB text-base leading-[1] mb-2 text-left">
              POST PRODUCTION:
            </div>
            In the post-production phase, we bring together all the elements to
            polish and enhance your video, ensuring a seamless and captivating
            final product. Our skilled team utilises advanced editing, color
            grading, animation, and sound integration techniques to elevate your
            footage. We strive for excellence, continuously refining and
            polishing your video until it reaches its full potential. Let us
            transform your raw footage into a polished masterpiece. process
          </span>
        </div>
      </div>

      {/* Text */}
      <div>
        <span
          className="fontB text-9xl text-[#dd5167]"
          style={{ textShadow: "0px 3px 2px #5252525c" }}
        >
          process
        </span>
      </div>
    </div>
  );
}

export default Process;
