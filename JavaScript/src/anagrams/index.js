export const anagrams = ({ word1, word2 }) => {
  const filterWord1 = word1
    .replace(/ /g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const filterWord2 = word2
    .replace(/ /g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return filterWord1 === filterWord2;
};
