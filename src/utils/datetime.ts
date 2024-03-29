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

export function getStartDateString(date: Date) {
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
    date.getDate()
  )}`;
}

function getMondayDate(currentDate: string | Date) {
  const date = new Date(currentDate);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  date.setDate(diff);
  return date;
}

export function getMonday(currentDate: string | Date) {
  const date = getMondayDate(currentDate);
  return date;
}

export function getPreviosMonday(currentDate: Date) {
  const date = getMondayDate(currentDate);
  date.setDate(date.getDate() - 7);
  return date;
}

export function getNextMonday(currentDate: Date) {
  const date = getMondayDate(currentDate);
  date.setDate(date.getDate() + 7);
  return date;
}

export function getFirstMondayOfMonth(month: number): Date {
  const date = new Date();
  date.setMonth(month);
  date.setDate(1);
  getMondayDate(date).getMonth();
  if (getMondayDate(date).getMonth() !== month) {
    const diff = date.getDate() + 7;
    date.setDate(diff);
    return getMondayDate(date);
  }
  return date;
}
