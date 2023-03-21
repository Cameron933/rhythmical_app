import AudioControls from "@/components/AudioControls";
import { MusicDetail } from "@/interfaces/music";
import React, { useState, useEffect, useRef } from "react";

interface Props {
  musicData: {
    code: number;
    data: MusicDetail[];
  };
}
type Duration = number | undefined;

const Demo = (props: Props) => {
  const musicArray: MusicDetail[] = props.musicData.data;

  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [currentMusic, setCurrentMusic] = useState<MusicDetail>(musicArray[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  // const intervalRef = useRef();
  // const isReady = useRef<boolean>(false);
  // const { duration }: any = audioRef.current?.currentTime;
  // const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : "0%";
  // const trackStyling = `
  //   -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  // `;

  // const startTimer = () => {
  //   // Clear any timers already running
  //   clearInterval(intervalRef.current);

  //   intervalRef.current = setInterval(() => {
  //     if (audioRef.current.ended) {
  //       toNextTrack();
  //     } else {
  //       setTrackProgress(audioRef.current.currentTime);
  //     }
  //   }, [1000]);
  // };

  const onPlayPauseClick = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  };

  const toPrevMusic = () => {
    const currentMusicIndex = musicArray.findIndex((music) => music.url === currentMusic.url);
    const nextMusicIndex = currentMusicIndex - 1 > 0 ? currentMusicIndex - 1 : 0;
    setCurrentMusic(musicArray[nextMusicIndex]);
    setIsPlaying(true);
  };

  const toNextMusic = () => {
    const currentMusicIndex = musicArray.findIndex((music) => music.url === currentMusic.url);
    const nextMusicIndex = currentMusicIndex < musicArray.length - 1 ? currentMusicIndex + 1 : 0;
    setCurrentMusic(musicArray[nextMusicIndex]);
    setIsPlaying(true);
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
    <main className="flex flex-col items-center justify-center">
      <p className="text-h3_light">Music player</p>
      <audio ref={audioRef} src={currentMusic.url} onEnded={toNextMusic} />
      <div className="w-full">
        <AudioControls
          isPlaying={isPlaying}
          onPlayPauseClick={onPlayPauseClick}
          onPrevClick={toPrevMusic}
          onNextClick={toNextMusic}
        />
        {/* <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        /> */}
      </div>
    </main>
  );
};

export default Demo;

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_MUSIC_SERVER_ADDRESS}/song/url/v1?id=108242,25727803,399354373,108914,26305541&level=lossless`
  );
  const musicData = await response.json();
  return {
    props: { musicData },
  };
};
