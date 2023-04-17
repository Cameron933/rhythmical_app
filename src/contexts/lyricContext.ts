import { createContext } from "react";

interface LyricContextType {
  lyricTimeStamp: number;
  setLyricTimeStamp: (lyricTimeStamp: number) => void;
  audioPlayer: React.RefObject<HTMLAudioElement> | null;
}

export const LyricContext = createContext<LyricContextType>({
  lyricTimeStamp: 0,
  setLyricTimeStamp: () => {},
  audioPlayer: null,
});
