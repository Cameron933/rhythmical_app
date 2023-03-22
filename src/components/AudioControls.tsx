import React from "react";
import { FaPlay, FaPause, FaRandom, FaForward, FaBackward } from "react-icons/fa";

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }: any) => {
  return (
    <div className="flex items-center border justify-around mt-4">
      <button type="button" className="w-12 h-12 text-primary" onClick={onPrevClick}>
        <FaBackward />
      </button>

      {isPlaying ? (
        <button type="button" className="w-12 h-12 text-primary" onClick={onPlayPauseClick}>
          <FaPause />
        </button>
      ) : (
        <button type="button" className="w-12 h-12 text-primary" onClick={onPlayPauseClick}>
          <FaPlay />
        </button>
      )}

      <button type="button" className="w-12 h-12 text-primary" onClick={onNextClick}>
        <FaForward />
      </button>
    </div>
  );
};

export default AudioControls;
