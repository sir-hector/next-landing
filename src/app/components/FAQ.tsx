"use client";

import React from "react";
import PlusIcon from "../assets/svg/Vector.svg";
import clsx from "clsx";

const items = [
  {
    question: "What payments methods do you accpet?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, recusandae! Sed dignissimos repellendus possimus tenetur neque, atque, fuga repudiandae quia, natus laudantium consequuntur sunt! Facere quisquam enim provident accusantium odio?",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, recusandae! Sed dignissimos repellendus possimus tenetur neque, atque, fuga repudiandae quia, natus laudantium consequuntur sunt! Facere quisquam enim provident accusantium odio?",
  },
  {
    question: "Is my data secure?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, recusandae! Sed dignissimos repellendus possimus tenetur neque, atque, fuga repudiandae quia, natus laudantium consequuntur sunt! Facere quisquam enim provident accusantium odio?",
  },
  {
    question: "Can i change my plan later?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, recusandae! Sed dignissimos repellendus possimus tenetur neque, atque, fuga repudiandae quia, natus laudantium consequuntur sunt! Facere quisquam enim provident accusantium odio?",
  },
];

const AccordianItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        <PlusIcon />
      </div>
      <div className={clsx("mt-4", { hidden: !isOpen, "": isOpen === true })}>
        {answer}
      </div>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] py-[72px] to-black sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:max-w-[648px] mx-auto font-bold tracking-tighter sm:text-6xl">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordianItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};