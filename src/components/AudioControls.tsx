import React from "react";
import { FaPlay, FaPause, FaRandom, FaForward, FaBackward } from "react-icons/fa";

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }: any) => {
  return (
    <div className="flex items-center justify-around w-full">
      <button
        type="button"
        className="flex items-center justify-center w-16 h-16 text-primary"
        onClick={onPrevClick}
      >
        <FaBackward />
      </button>

      {isPlaying ? (
        <button
          type="button"
          className="flex items-center justify-center w-16 h-16 text-primary"
          onClick={onPlayPauseClick}
        >
          <FaPause />
        </button>
      ) : (
        <button
          type="button"
          className="flex items-center justify-center w-16 h-16 text-primary"
          onClick={onPlayPauseClick}
        >
          <FaPlay />
        </button>
      )}

      <button
        type="button"
        className="flex items-center justify-center w-16 h-16 text-primary"
        onClick={onNextClick}
      >
        <FaForward />
      </button>
    </div>
  );
};

export default AudioControls;
