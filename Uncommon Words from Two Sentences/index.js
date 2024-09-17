/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let s1Words = s1.split(' ');
  let set1 = new Set();
  let setUsedWords1 = new Set();

  for (const word of s1Words) {
    if (set1.has(word) || setUsedWords1.has(word)) {
      setUsedWords1.add(word);
      set1.delete(word);
    } else {
      set1.add(word);
    }
  }

  let s2Words = s2.split(' ');
  let set2 = new Set();
  let setUsedWords2 = new Set();

  for (const word of s2Words) {
    if (set2.has(word) || setUsedWords2.has(word)) {
      setUsedWords2.add(word);
      set2.delete(word);
    } else {
      set2.add(word);
    }
  }

  for (const key of set1) {
    if (set2.has(key) || setUsedWords2.has(key)) {
      set1.delete(key);
      set2.delete(key);
    }
  }
  for (const key of set2) {
    if (set1.has(key) || setUsedWords1.has(key)) {
      set1.delete(key);
      set2.delete(key);
    }
  }

  return Array.from(set1).concat(Array.from(set2))
};
