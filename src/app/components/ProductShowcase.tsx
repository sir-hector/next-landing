import Image from "next/image";
import AppImage from "../assets/images/App_night.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplished with an app designed
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={AppImage} alt="app night" className="mt-14" />
        </div>
      </div>
    </div>
  );
};
