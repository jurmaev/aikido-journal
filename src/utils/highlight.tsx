import { getShortName } from "./names";

export function highlightText(text: string, searchWord: string) {
  searchWord = searchWord.trim();
  if (
    searchWord === '' ||
    !searchWord ||
    !text.toLowerCase().includes(searchWord.toLowerCase())
  ) {
    return <>{text}</>;
  } else {
    const index = text.toLowerCase().indexOf(searchWord.toLowerCase());
    return (
      <>
        {text.substring(0, index)}
        <mark>{text.substring(index, index + searchWord.length)}</mark>
        {text.substring(index + searchWord.length, text.length)}
      </>
    );
  }
}

export function getHighlightedParentName(name: string, isMobile: boolean, highlightedValue: string) {
  if (isMobile) {
    const shortName = getShortName(name).split(' ');
    if (highlightedValue !== '') {
      return (
        <>
          {highlightText(shortName[0], highlightedValue)} {shortName.slice(1)}
        </>
      );
    }
    return <>{getShortName(name)}</>;
  } else if (highlightedValue !== '') {
    return <>{highlightText(name, highlightedValue)}</>;
  }
  return <>{name}</>;
}
