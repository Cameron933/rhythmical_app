import React from "react";
import { BsThreeDots, BsCollectionPlay } from "react-icons/bs";

const SideBar = () => {
  return (
    <aside className="flex flex-col w-[320px] bg-black">
      <div className="flex w-full h-28 justify-around items-center">
        <div className="flex gap-2 items-center">
          <BsCollectionPlay className="w-8 h-8 text-light" />
          <h1 className="text-h2_regular text-light">Rhythmical</h1>
        </div>
        <BsThreeDots className="w-6 h-6 text-light cursor cursor-pointer" />
      </div>
      <div className="divider m-0" />
      <div></div>
      <div className="relative">
        <div className="absolute w-2 h-8 left-0 bg-primary" />
        <div className="absolute w-16 h-8 left-2 bg-gradient-to-r from-primary/90 to-primary/0 " />
      </div>
    </aside>
  );
};

export default SideBar;
