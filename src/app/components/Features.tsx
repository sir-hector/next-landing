import { Feature } from "./Feature";

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
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
