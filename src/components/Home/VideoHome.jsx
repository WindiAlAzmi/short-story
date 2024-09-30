export default function VideoHome() {

    
  return (
    <div className="w-full relative">
      <video
        className=" w-full h-[30rem] object-cover object-center backdrop-brightness-50"
        loop
        autoPlay
        muted
      >
        <source src="/assets/video/makeup-vid.mp4" type="video/mp4" />
      </video>
      <div className="w-full absolute gap-10 inset-0 flex flex-col  px-40 justify-center items-left bg-black/20">
        <div className="text-white text-4xl font-bold text-left w-[35%]">
          <h3>Learn Makeup By Yourself From Anywhere</h3>
        </div>
        <div className="text-white text-base font-normal text-left w-[35%]">
          <h4>
            Increasing your makeup technique from many professional lecture in
            one platforms. Makeup Money Make it Happen!
          </h4>
        </div>
        <div className="rounded-[10px] w-[20%] h-12 px-6 py-2 leading-8 text-center text-base text-white bg-black">
          Find Course Around you{" "}
        </div>
      </div>
    </div>
  );
}
