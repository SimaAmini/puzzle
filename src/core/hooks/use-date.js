import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const useDate = () => {
  const fromNow = (date) => dayjs(new Date(date)).fromNow();

  return {
    fromNow,
  };
};
