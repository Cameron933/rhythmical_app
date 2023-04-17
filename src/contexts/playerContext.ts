import { createContext } from "react";
import { IMusicDetail } from "@/interfaces/music";

interface PlayerContextType {
  listIndex: number;
  setListIndex: (listIndex: number) => void;
  playerList: IMusicDetail[];
  setPlayerList: (playerList: IMusicDetail[]) => void;
}

export const PlayerContext = createContext<PlayerContextType>({
  listIndex: 0,
  setListIndex: () => {},
  playerList: [],
  setPlayerList: () => {},
});
