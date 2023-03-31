import React from "react";
import { BsThreeDots, BsCollectionPlay } from "react-icons/bs";

const SideBar = () => {
  return (
    <aside className="flex flex-col w-[320px] bg-black">
      <div className="flex items-center justify-around w-full h-28">
        <div className="flex items-center gap-2">
          <BsCollectionPlay className="w-8 h-8 text-light" />
          <h1 className="text-h2_regular text-light">Rhythmical</h1>
        </div>
        <BsThreeDots className="w-6 h-6 cursor-pointer text-light cursor" />
      </div>
      <div className="m-0 divider" />
      <div></div>
      <div className="relative">
        <div className="absolute left-0 w-2 h-8 bg-primary" />
        <div className="absolute w-16 h-8 left-2 bg-gradient-to-r from-primary/90 to-primary/0 " />
      </div>
    </aside>
  );
};

export default SideBar;
