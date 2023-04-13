import AudioControls from "@/components/AudioControls";
import React, { useState, useEffect, useRef, useContext } from "react";
import { PlayerContext } from "@/contexts/playerContext";
import { AiTwotoneSound } from "react-icons/ai";
import { time } from "console";

const MusicPlayerBar = () => {
  const { playerList } = useContext(PlayerContext);
  const [volume, setVolume] = useState<number>(1.0);

  const [currentProgressTime, setCurrentProgressTime] = useState(0);
  const [currentMusicTime, setCurrentMusicTime] = useState(0);
  const [currentMusic, setCurrentMusic] = useState<MusicDetail>(playerList[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setCurrentMusicTime(playerList[0].time);
  }, [currentMusic]);

  useEffect(() => {
    setCurrentMusic(playerList[0]);
  }, [playerList]);

  const onPlayPauseClick = () => {
    console.log(playerList);
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  };

  const toPrevMusic = () => {
    const currentMusicIndex = playerList.findIndex((music) => music.url === currentMusic.url);
    const nextMusicIndex = currentMusicIndex - 1 > 0 ? currentMusicIndex - 1 : 0;
    setCurrentMusic(playerList[nextMusicIndex]);
    setIsPlaying(true);
  };

  const toNextMusic = () => {
    const currentMusicIndex = playerList.findIndex((music) => music.url === currentMusic.url);
    const nextMusicIndex = currentMusicIndex < playerList.length - 1 ? currentMusicIndex + 1 : 0;
    setCurrentMusic(playerList[nextMusicIndex]);
    setIsPlaying(true);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current?.play();
      }, 300);
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentMusic]);

  return (
    <div className="px-4 fixed bottom-0 h-[10vh] w-full bg-dark-400/80 grid grid-cols-3">
      <div className="flex items-center justify-start">
        <p className="text-h3_light">Music player</p>
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-3">
        <audio ref={audioRef} src={currentMusic?.url} onEnded={toNextMusic} />
        <AudioControls
          isPlaying={isPlaying}
          onPlayPauseClick={onPlayPauseClick}
          onPrevClick={toPrevMusic}
          onNextClick={toNextMusic}
        />

        <div className="flex justify-center items-center">
          <div className="pr-4">2:00</div>
          <div className="relative w-[400px] h-[5px] bg-white rounded-lg">
            <div className="absolute bg-primary-400 w-[220px] h-[5px] rounded-lg" />
          </div>
          <div className="pl-4">{currentMusicTime}</div>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <div className="flex items-center justify-center w-16 h-16 text-primary">
          <AiTwotoneSound />
        </div>
        <input
          className="w-[100px]"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default MusicPlayerBar;
