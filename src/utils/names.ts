import { FullName } from '../types/user';

export function getShortName(fullName: string) {
  const [surname, name, patronymic] = fullName.split(' ');
  if (patronymic) {
    return `${surname} ${name[0]}. ${patronymic[0]}.`;
  }
  return `${surname} ${name[0]}.`;
}

export function capitalizeWords(words: string) {
  return trimSpaces(words)
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

export function getFullName(fullName: FullName): string {
  if (fullName.patronymic) {
    return `${fullName.surname} ${fullName.name} ${fullName.patronymic}`;
  } else {
    return `${fullName.surname} ${fullName.name}`;
  }
}

export function hasNumber(str: string) {
  return /\d/.test(str);
}

export function trimSpaces(string: string) {
  return string.trim().replace(/\s+/g, ' ');
}
