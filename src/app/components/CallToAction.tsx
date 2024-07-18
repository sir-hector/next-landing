import helixImage from "../assets/images/helix2 1.png";
import emojiStar from "../assets/images/emojistar 1.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image
          src={helixImage}
          alt=""
          className="absolute -top-6 left-[calc(100%+36px)]"
        />
        <Image
          src={emojiStar}
          alt=""
          className="absolute -top-[120px] right-[calc(100%+24px)]"
        />
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get Instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          dolor quia doloremque fuga deleniti est voluptatem, in explicabo
          facere corrupti veniam ipsum ut. Quia, ipsum eius aspernatur
          doloremque maiores voluptate!
        </p>
        <form
          className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row"
          action=""
        >
          <input
            type="email"
            placeholder="your@emial.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get Access
          </button>
        </form>
      </div>
    </div>
  );
};
