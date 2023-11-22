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
