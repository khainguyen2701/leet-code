console.time(1);
const firstUniqChar = (s) => {
  let contains = {};
  for (let char of s) {
    if (contains[char]) {
      contains[char]++;
    } else {
      contains[char] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (contains[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log("23", firstUniqChar("aabb"));
console.timeEnd(1);
