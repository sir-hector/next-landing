import Social from "../assets/svg/social.svg";
import Social1 from "../assets/svg/social-1.svg";
import Social2 from "../assets/svg/social-2.svg";
import Social3 from "../assets/svg/social-3.svg";
import Social4 from "../assets/svg/social-4.svg";
import Social5 from "../assets/svg/social-5.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-5 text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            {" "}
            2024 Karol Kraus. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <Social />
            </li>
            <li>
              <Social1 />
            </li>
            <li>
              <Social2 />
            </li>
            <li>
              <Social3 />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
