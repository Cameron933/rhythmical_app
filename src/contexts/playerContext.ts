import { createContext } from "react";
import { MusicDetail } from "@/interfaces/music";

interface PlayerContextType {
  listIndex: number;
  setListIndex: (listIndex: number) => void;
  playerList: MusicDetail[];
  setPlayerList: (playerList: MusicDetail[]) => void;
}

export const PlayerContext = createContext<PlayerContextType>({
  listIndex: 0,
  setListIndex: () => {},
  playerList: [],
  setPlayerList: () => {},
});
