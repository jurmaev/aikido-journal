export function getShortName(name: string) {
  const nameParts = name.split(' ');
  return `${nameParts[0]} ${nameParts[1][0]}. ${nameParts[2][0]}.`;
}

export function capitalizeWords(words: string) {
  return words
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}
