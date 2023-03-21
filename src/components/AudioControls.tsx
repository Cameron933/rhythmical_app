import React from "react";
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon } from "@heroicons/react/24/solid";

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }: any) => {
  return (
    <div className="w-screen flex items-center border justify-between mt-4">
      <button type="button" className="w-6 h-6 text-primary" onClick={onPrevClick}>
        <BackwardIcon />
      </button>

      {isPlaying ? (
        <button type="button" className="w-6 h-6 text-primary" onClick={onPlayPauseClick}>
          <PlayIcon />
        </button>
      ) : (
        <button type="button" className="w-6 h-6 text-primary" onClick={onPlayPauseClick}>
          <PauseIcon />
        </button>
      )}

      <button type="button" className="w-6 h-6 text-primary" onClick={onNextClick}>
        <ForwardIcon />
      </button>
    </div>
  );
};

export default AudioControls;
