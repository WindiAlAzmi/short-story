export default function VideoDemo() {
  return (
    <div className="w-full relative flex md:top-0 top-10" >
      <video
        className=" w-full md:h-[35rem] object-cover object-center backdrop-brightness-50"
        loop
        autoPlay
        muted
      >
        <source src="/assets/video/onsite.mp4" type="video/mp4" />
      </video>
      <div className="w-full absolute md:gap-10 gap-2 inset-0 flex flex-col  md:px-20  px-0 justify-center md:items-start items-center bg-black/20">
        <div className="text-white md:text-4xl text-[18px] md:mt-0 mt-10 whitespace-pre-wrap font-bold md:text-left text-center md:w-[28%] min-w-[20%] w-[100%]">
          <h3>Get Real Experience as Makeup Artist!</h3>
        </div>
        <div className="text-white md:text-[20px] text-[10px] font-normal  md:text-left text-center md:w-[30%] w-[80%]">
          <h4>
            exclusive only 5 person per season with professional instructor
          </h4>
        </div>
      </div>
    </div>
  );
}
