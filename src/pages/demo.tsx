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

  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  // const { duration }: any = audioPlayer.current?.currentTime;

  // const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : "0%";
  // const trackStyling = `
  //   -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  // `;

  // console.log(audioPlayer.current?.volume);

  const onPlayPauseClick = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioPlayer.current?.play() : audioPlayer.current?.pause();
  };

  // const handleLastMusic = () => {
  //   const currentMusicIndex = musicArray.findIndex((element) => element.url === currentMusic.url);
  //   const lastMusicIndex = currentMusicIndex > 0 ? currentMusicIndex - 1 : musicArray.length - 1;
  //   setCurrentMusic(musicArray[lastMusicIndex]);

  //   setTimeout(() => {
  //     audioPlayer.current?.play();
  //   }, 500);
  // };
  const toPrevMusic = () => {
    const currentMusicIndex = musicArray.findIndex((element) => element.url === currentMusic.url);
    const nextMusicIndex = currentMusicIndex < musicArray.length - 1 ? currentMusicIndex - 1 : 0;
    setCurrentMusic(musicArray[nextMusicIndex]);

    setTimeout(() => {
      audioPlayer.current?.play();
    }, 500);
  };

  const toNextMusic = () => {
    const currentMusicIndex = musicArray.findIndex((element) => element.url === currentMusic.url);
    const nextMusicIndex = currentMusicIndex < musicArray.length - 1 ? currentMusicIndex + 1 : 0;
    setCurrentMusic(musicArray[nextMusicIndex]);

    setTimeout(() => {
      audioPlayer.current?.play();
    }, 500);
  };

  return (
    <main>
      <p className="self-center">I am music player</p>
      <audio ref={audioPlayer} src={currentMusic.url} onEnded={toNextMusic} />

      <AudioControls
        isPlaying={isPlaying}
        onPlayPauseClick={onPlayPauseClick}
        onPrevClick={toPrevMusic}
        onNextClick={toNextMusic}
      />
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
