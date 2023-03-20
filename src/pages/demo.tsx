import { MusicDetail } from "@/interfaces/music";
import { useState, useRef } from "react";

interface Props {
  musicData: {
    code: number;
    data: MusicDetail[];
  };
}

const Demo = (props: Props) => {
  const musicArray: MusicDetail[] = props.musicData.data;

  const [currentMusic, setCurrentMusic] = useState<MusicDetail>(musicArray[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const audioPlayer = useRef<HTMLAudioElement | null>(null);

  console.log(audioPlayer.current?.volume);

  const handlePlayAndPause = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioPlayer.current?.play() : audioPlayer.current?.pause();
  };

  const handleLastMusic = () => {
    const currentMusicIndex = musicArray.findIndex((element) => element.url === currentMusic.url);
    const lastMusicIndex = currentMusicIndex > 0 ? currentMusicIndex - 1 : musicArray.length - 1;
    setCurrentMusic(musicArray[lastMusicIndex]);

    setTimeout(() => {
      audioPlayer.current?.play();
    }, 500);
  };

  const handleNextMusic = () => {
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
      <audio ref={audioPlayer} src={currentMusic.url} onEnded={handleNextMusic} />
      <div className="flex gap-5 bg-primary-400">
        <button onClick={handlePlayAndPause}>{isPlaying ? "Play" : "Pause"}</button>
        <button onClick={handleLastMusic}>Last</button>
        <button onClick={handleNextMusic}>Next</button>
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
