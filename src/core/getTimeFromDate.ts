export const getTimeFromDate = (dateStr: string) => {
  const date = new Date(dateStr);

  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};

export const getTimeFromSeconds = (duration: number) => {
  const h = Math.floor(duration / 3600)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((duration % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(duration % 60)
    .toString()
    .padStart(2, '0');

  return Number(h) > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
};
