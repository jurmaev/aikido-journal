import { FullName } from '../types/user';

export function getShortName(name: string) {
  const nameParts = name.split(' ');
  return `${nameParts[0]} ${nameParts[1][0]}. ${nameParts[2][0]}.`;
}

export function capitalizeWords(words: string) {
  return trimSpaces(words)
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

export function getFullName(child: FullName): string {
  return `${child.surname} ${child.name} ${child.patronymic}`;
}

export function trimSpaces(string: string) {
  return string.trim().replace(/\s+/g, ' ');
}
