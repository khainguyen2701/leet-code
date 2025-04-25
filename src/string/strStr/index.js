const strStr = (haystack, needle) => {
  if (needle.length === 0) return -1;
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      j++;
      if (j === needle.length) return i - j + 1; //return index;
    } else {
      // set flag j = 0 and set i to the first step of the next duplicate text
      i = i - j;
      j = 0;
    }
  }
  return -1;
};

console.log(strStr("ababcabc", "abc"));
