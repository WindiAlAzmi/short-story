export default function VideoHome() {
  return (
    <div className="w-full relative flex top-20">
      <video
        className=" w-full md:h-[30rem] object-cover object-center backdrop-brightness-50"
        loop
        autoPlay
        muted
      >
        <source src="/assets/video/makeup-vid.mp4" type="video/mp4" />
      </video>
      <div className="w-full absolute md:gap-10 gap-2 inset-0 flex flex-col  md:px-20  px-0 justify-center md:items-start items-center bg-black/20">
        <div className="text-white md:text-4xl text-[18px] md:mt-0 mt-10 whitespace-pre-wrap font-bold md:text-left text-center md:w-[28%] min-w-[20%] w-[100%]">
          <h3>Learn Makeup By Yourself From Anywhere</h3>
        </div>
        <div className="text-white md:text-[20px] text-[10px] font-normal  md:text-left text-center md:w-[30%] w-[80%]">
          <h4>
            Increasing your makeup technique from many professional lecture in
            one platforms. Makeup Money Make it Happen!
          </h4>
        </div>
        <div className="rounded-[10px] md:w-[24%] min-w-[20%] w-[60%] md:h-12 h-10 px-6 py-2 md:leading-8  leading-6 text-center md:text-base text-[12px] text-white bg-black">
          Find Course Around you{" "}
        </div>
      </div>
    </div>
  );
}
