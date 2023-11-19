export function getShortName(name: string) {
  const nameParts = name.split(' ');
  return `${nameParts[0]} ${nameParts[1][0]}. ${nameParts[2][0]}.`;
}
