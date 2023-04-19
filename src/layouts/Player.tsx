import AudioControls from "@/components/AudioControls";
import React, { useState, useEffect, useRef, useContext } from "react";
import { PlayerContext } from "@/contexts/playerContext";
import { LyricContext } from "@/contexts/lyricContext";
import { IMusicDetail } from "@/interfaces/music";
import { timeConverter } from "@/utils/timeConverter";
import Image from "next/image";
import CoverImage from "@/stories/CoverImage";
import ProgressBar from "@/stories/ProgressBar";

const Player = () => {
  const { audioPlayer } = useContext(LyricContext);
  const { listIndex, setListIndex, playerList } = useContext(PlayerContext);
  const [volume, setVolume] = useState<number>(1.0);

  const [currentProgressedTime, setCurrentProgressedTime] = useState("00:00");
  const [currentMusicTime, setCurrentMusicTime] = useState("00:00");

  const [currentMusic, setCurrentMusic] = useState<IMusicDetail>(playerList[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setCurrentMusic(playerList[0]);
  }, [playerList]);

  useEffect(() => {
    if (currentMusic?.time) {
      setCurrentMusicTime(timeConverter(currentMusic.time / 1000));
    }
  }, [audioPlayer, currentMusic?.time]);

  const onPlayPauseClick = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioPlayer?.current?.play() : audioPlayer?.current?.pause();
  };

  const toPrevMusic = () => {
    const nextMusicIndex = listIndex - 1 > 0 ? listIndex - 1 : 0;
    setListIndex(nextMusicIndex);
    setCurrentMusic(playerList[nextMusicIndex]);
    setIsPlaying(true);
  };

  const toNextMusic = () => {
    const nextMusicIndex = listIndex < playerList.length - 1 ? listIndex + 1 : 0;
    setListIndex(nextMusicIndex);
    setCurrentMusic(playerList[nextMusicIndex]);
    setIsPlaying(true);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);
    setVolume(value);
    if (audioPlayer?.current) {
      audioPlayer.current.volume = value;
    }
  };

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => {
        audioPlayer?.current?.play();
      }, 300);
    } else {
      audioPlayer?.current?.pause();
    }
  }, [isPlaying, currentMusic, audioPlayer]);

  return (
    <section className="fixed bottom-[72px] h-[78px] w-full md:bottom-0 md:h-[120px] md:w-[calc(100vw-64px)] lg:w-[calc(100vw-320px)]">
      <div className="relative h-full drop-shadow-xsm">
        <Image
          src="/bg_player.png"
          alt="Player background image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="absolute left-0 top-0 flex h-full w-full gap-2 bg-dark-400 bg-opacity-80 px-2 backdrop-blur-2xl md:px-4 md:py-2">
        <audio ref={audioPlayer} src={currentMusic?.url} onEnded={toNextMusic} />
        <div className="flex flex-col items-center justify-center gap-1 lg:justify-start">
          <CoverImage src="/sample_cover.png" />
          <div className="hidden items-center justify-center gap-1 px-2 text-light md:flex md:flex-col lg:hidden">
            <p className="text-base">This is love</p>
            <p className="text-sm">By Jaxson Westervelt</p>
          </div>
        </div>

        <div className="hidden items-start justify-center gap-[10px] px-2 text-light lg:flex lg:flex-col ">
          <p className="text-base">This is love</p>
          <p className="text-sm">By Jaxson Westervelt</p>
        </div>

        <div className="flex flex-grow flex-col items-center gap-1 self-stretch py-1 md:items-start md:gap-2 md:p-[10px]">
          <div className="flex items-center justify-center gap-1 px-2 text-light md:hidden">
            <p className="text-sm">This is love</p>
            <p className="text-sm"> - </p>
            <p className="text-xs">By Jaxson Westervelt</p>
          </div>
          <AudioControls
            isPlaying={isPlaying}
            onPlayPauseClick={onPlayPauseClick}
            onPrevClick={toPrevMusic}
            onNextClick={toNextMusic}
            volume={volume}
            handleVolumeChange={handleVolumeChange}
          />
          <ProgressBar processTime="00:00" currentTime={currentMusicTime} />
        </div>
      </div>
    </section>
  );
};

export default Player;
