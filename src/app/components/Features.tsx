import IcosystemIcon from "../assets/svg/icosystemB.svg";

const features = [
  {
    title: "Integration ecosystem",
    description: "Enhance your productivity",
  },
  {
    title: "Integration ecosystem",
    description: "Enhance your productivity",
  },
  {
    title: "Integration ecosystem",
    description: "Enhance your productivity",
  },
];
export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, team work tools
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1"
            >
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <IcosystemIcon />
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <h3 className="mt-2 text-white/70">{description}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
