import React from "react";
import { BsThreeDots, BsCollectionPlay } from "react-icons/bs";
import { LinkButton } from "@/stories/LinkButton";
import Image from "next/image";
const SideBar = () => {
  return (
    <aside className="h-[100vh] w-0 flex-col text-white transition-all duration-200 ease-in-out md:flex md:w-[64px] lg:w-[320px]">
      <div className="relative h-full drop-shadow-bgImgShadow transition-none">
        <Image src="/bg_sidebar.png" alt="Player background image" fill />
      </div>

      <div className="hidden md:block">
        <div className="absolute left-0 top-0 h-full md:w-[64px] lg:w-[320px] bg-dark-400 bg-opacity-80 backdrop-blur-2xl">
          <div className="flex items-center justify-around w-full h-28">
            <div className="flex items-center gap-2">
              <BsCollectionPlay className="w-8 h-8 text-light" />
              <h1 className="text-h2_regular text-light">Rhythmical</h1>
            </div>
            <BsThreeDots className="w-6 h-6 cursor-pointer text-light cursor" />
          </div>
          <div className="m-0 divider" />

          <div className="flex flex-col gap-2">
            <h1 className="mt-2 text-primary-100 ml-7">MENU</h1>
            <LinkButton iconName="RiHome5Fill">Home</LinkButton>
            <LinkButton iconName="RiRocketFill">Discover</LinkButton>
            <LinkButton iconName="RiAlbumFill">Albums</LinkButton>
            <LinkButton iconName="RiUserStarFill">Artists</LinkButton>
            <LinkButton iconName="RiMvFill">MV</LinkButton>
          </div>
          <div className="m-0 divider" />

          <div className="flex flex-col gap-2">
            <h1 className="mt-2 text-primary-100 ml-7">YOUR LIBRARY</h1>
            <LinkButton iconName="RiTimeFill">Recent Played</LinkButton>
            <LinkButton iconName="RiHeart2Fill">Favorite Songs</LinkButton>
          </div>
          <div className="m-0 divider" />

          <div className="flex flex-col gap-2">
            <h1 className="mt-2 text-primary-100 ml-7">PLAYLISTS</h1>
            <LinkButton iconName="RiPlayListFill">Top Hit 2023 - USA</LinkButton>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
