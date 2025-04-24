const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let constants = {};
  for (let i of s) {
    constants[i] = (constants[i] || 0) + 1;
  }
  for (let j of t) {
    if (!constants[j]) return false;
    constants[j]--;
  }
  return true;
};
console.log(isAnagram("anagram", "nagaram"));
