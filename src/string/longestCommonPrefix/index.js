const longestCommonPrefix = (s) => {
  const length = s.length;
  if (length === 0) return "";

  let prefix = "";
  for (let i = 0; i < s[0].length; i++) {
    const char = s[0][i];
    for (let j = 1; j < s.length; j++) {
      if (i >= s[j].length || s[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
};

console.log("123", longestCommonPrefix(["a"]));
