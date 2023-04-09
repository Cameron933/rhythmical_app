import React from "react";
import { FaPlay, FaPause, FaRandom, FaForward, FaBackward } from "react-icons/fa";
import { ImLoop2 } from "react-icons/im";

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }: any) => {
  return (
    <div className="flex items-center w-full gap-2">
      <div className="flex justify-end flex-1 gap-2">
        <button type="button" className="flex items-center justify-center w-8 h-8 text-primary">
          <FaRandom className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 text-primary"
          onClick={onPrevClick}
        >
          <FaBackward className="w-4 h-4" />
        </button>
      </div>

      {isPlaying ? (
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-primary"
          onClick={onPlayPauseClick}
        >
          <FaPause className="w-4 h-4" />
        </button>
      ) : (
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 pl-1 bg-white rounded-full text-primary"
          onClick={onPlayPauseClick}
        >
          <FaPlay className="w-4 h-4" />
        </button>
      )}

      <div className="flex justify-start flex-1 gap-2">
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 text-primary"
          onClick={onNextClick}
        >
          <FaForward className="w-4 h-4" />
        </button>
        <button type="button" className="flex items-center justify-center w-8 h-8 text-primary">
          <ImLoop2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AudioControls;
