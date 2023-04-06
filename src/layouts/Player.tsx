import AudioControls from "@/components/AudioControls";
import { MusicDetail } from "@/interfaces/music";
import React, { useState, useEffect, useRef, useContext } from "react";
import { PlayerContext } from "@/contexts/playerContext";

const Player = () => {
  const { playerList } = useContext(PlayerContext);
  const [volume, setVolume] = useState<number>(1.0);
  // const [trackIndex, setTrackIndex] = useState<number>(0);
  // const [trackProgress, setTrackProgress] = useState(0);
  const [currentMusic, setCurrentMusic] = useState<MusicDetail>(playerList[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onPlayPauseClick = () => {
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
    <div className="fixed bottom-0 h-[10vh] w-full bg-dark-400/80">
      <p className="text-h3_light">Music player</p>
      <audio ref={audioRef} src={currentMusic?.url} onEnded={toNextMusic} />
      <div className="">
        <AudioControls
          isPlaying={isPlaying}
          onPlayPauseClick={onPlayPauseClick}
          onPrevClick={toPrevMusic}
          onNextClick={toNextMusic}
        />
      </div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default Player;
