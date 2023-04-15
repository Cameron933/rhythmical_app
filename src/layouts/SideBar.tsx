import React from "react";
import { BsThreeDots, BsCollectionPlay } from "react-icons/bs";
import { LinkButton } from "@/stories/LinkButton";

const SideBar = () => {
  return (
    <aside className="flex flex-col w-[320px] h-[100vh] bg-black">
      <div className="flex items-center justify-around w-full h-28">
        <div className="flex items-center gap-2">
          <BsCollectionPlay className="w-8 h-8 text-light" />
          <h1 className="text-h2_regular text-light">Rhythmical</h1>
        </div>
        <BsThreeDots className="w-6 h-6 cursor-pointer text-light cursor" />
      </div>
      <div className="m-0 divider" />

      <div className="flex flex-col gap-2">
        <h1 className="mt-2 text-primary ml-7">MENU</h1>
        <LinkButton iconName="RiHome5Fill">Home</LinkButton>
        <LinkButton iconName="RiRocketFill">Discover</LinkButton>
        <LinkButton iconName="RiAlbumFill">Albums</LinkButton>
        <LinkButton iconName="RiUserStarFill">Artists</LinkButton>
        <LinkButton iconName="RiMvFill">MV</LinkButton>
      </div>
      <div className="m-0 divider" />

      <div className="flex flex-col gap-2">
        <h1 className="mt-2 text-primary ml-7">YOUR LIBRARY</h1>
        <LinkButton iconName="RiTimeFill">Recent Played</LinkButton>
        <LinkButton iconName="RiHeart2Fill">Favorite Songs</LinkButton>
      </div>
      <div className="m-0 divider" />

      <div className="flex flex-col gap-2">
        <h1 className="mt-2 text-primary ml-7">PLAYLISTS</h1>
        <LinkButton iconName="RiPlayListFill">Top Hit 2023 - USA</LinkButton>
      </div>
    </aside>
  );
};

export default SideBar;
