export const timeConverter = (time: number | undefined) => {
  if (!time) {
    return "00:00";
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const twoDigitMinutes = minutes.toString().padStart(2, "0");
  const twoDigitSeconds = seconds.toString().padStart(2, "0");

  return `${twoDigitMinutes}:${twoDigitSeconds}`;
};
