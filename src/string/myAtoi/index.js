const myAtoi = (s) => {
  s = s.trim();
  const isAtoi = (c) => /[0-9]/i.test(c);
  const MIN = -2147483648,
    MAX = 2147483647;

  if (s.length === 0) return 0;

  let str = "";
  if (["+", "-"].includes(s[0]) || isAtoi(s[0])) {
    str += s[0];
  } else {
    return 0;
  }

  for (let i = 1; i < s.length; i++) {
    if (isAtoi(s[i])) {
      str += s[i];
    } else {
      break;
    }
  }
  if (Number(str) < MIN) return MIN;
  if (Number(str) > MAX) return MAX;
  if (isNaN(Number(str))) return 0;
  return Number(str);
};

console.log("myAtoi", myAtoi("1337c0d3"));
