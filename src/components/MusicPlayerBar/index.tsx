import AudioControls from "@/components/AudioControls";
import React, { useState, useEffect, useRef, useContext } from "react";
import { PlayerContext } from "@/contexts/playerContext";
import { LyricContext } from "@/contexts/lyricContext";
import { AiTwotoneSound } from "react-icons/ai";
import { IMusicDetail } from "@/interfaces/music";
import { timeConverter } from "@/utils/timeConverter";

const MusicPlayerBar = () => {
  const { audioPlayer } = useContext(LyricContext);
  const { listIndex, setListIndex, playerList } = useContext(PlayerContext);
  const [volume, setVolume] = useState<number>(1.0);

  const [currentProgressedTime, setCurrentProgressedTime] = useState(0);
  const [currentMusicTime, setCurrentMusicTime] = useState(0);

  const [currentMusic, setCurrentMusic] = useState<IMusicDetail>(playerList[listIndex]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setCurrentMusic(playerList[0]);
  }, [playerList]);

  useEffect(() => {
    console.log(currentMusic);
    setCurrentMusicTime(Number(timeConverter(currentMusic.time)));
  }, [currentMusic]);

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
  }, [isPlaying, currentMusic]);

  return (
    <div className="px-4 fixed bottom-0 h-[120px] w-full bg-dark-400/80 grid grid-cols-3">
      <div className="flex items-center justify-start">
        <p className="text-h3_light">Music player</p>
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-3">
        <audio ref={audioPlayer} src={currentMusic?.url} onEnded={toNextMusic} />
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
          className="w-[100px] h-[10px]"
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
