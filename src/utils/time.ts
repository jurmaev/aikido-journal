import { TrainingTime } from '../types/group';

export function addZero(i: number) {
  if (i < 10) {
    return '0' + i;
  }
  return i;
}

export function getTrainingTime(day: TrainingTime | null) {
  if (day) {
    return {
      start: `${addZero(new Date(day.start).getHours())}:${addZero(
        new Date(day.start).getMinutes()
      )}`,
      end: `${addZero(new Date(day.end).getHours())}:${addZero(
        new Date(day.end).getMinutes()
      )}`,
    } as TrainingTime;
  }
  return null;
}

export function getDatetime(day: TrainingTime | null) {
  if (day) {
    const [startHours, startMinutes] = day.start
      .split(':')
      .map((item) => Number(item));
    const [endHours, endMinutes] = day.end
      .split(':')
      .map((item) => Number(item));
    const startDate = new Date();
    startDate.setHours(startHours);
    startDate.setMinutes(startMinutes);
    const endDate = new Date();
    endDate.setHours(endHours);
    endDate.setMinutes(endMinutes);
    return {
      start: startDate.toISOString(),
      end: endDate.toISOString(),
    };
  }
  return null;
}

function getMondayDate() {
  const date = new Date();
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  date.setDate(diff);
  return date;
}

export function getMonday() {
  const date = getMondayDate();
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
}

export function getPreviosMonday() {
  const date = getMondayDate();
  date.setDate(date.getDate() - 7);
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
}

export function getNextMonday() {
  const date = getMondayDate();
  date.setDate(date.getDate() + 7);
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
}
