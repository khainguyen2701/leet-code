console.time(1);
const isPalindrome = (s) => {
  const lowerCase = s.toLowerCase();
  let left = 0,
    right = lowerCase.length - 1;
  const isAlphaNum = (c) => /[a-z0-9]/i.test(c);

  while (left < right) {
    while (left < right && !isAlphaNum(lowerCase[left])) left++;
    while (left < right && !isAlphaNum(lowerCase[right])) right--;
    if (lowerCase[left] !== lowerCase[right]) return false;
    left++;
    right--;
  }
  return true;
};
console.log(isPalindrome("ava1ava"));
console.timeEnd(1);
