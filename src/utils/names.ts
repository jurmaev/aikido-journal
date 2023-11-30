import { Child } from '../types/children';

export function getShortName(name: string) {
  const nameParts = name.split(' ');
  return `${nameParts[0]} ${nameParts[1][0]}. ${nameParts[2][0]}.`;
}

export function capitalizeWords(words: string) {
  return words
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

export function getFullName(child: Child): string {
  return `${child.surname} ${child.name} ${child.patronymic}`;
}
