const reverseNumber = (number) => {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;
  if (number > INT_MAX || number < INT_MIN) return 0;
  let result = 0;
  const isNegative = number < 0;
  while (number !== 0) {
    let digits = number % 10;
    result = result * 10 + digits;
    if (result > INT_MAX) {
      return 0;
    }
    number = (number / 10) | 0;
  }
  return isNegative ? -result : result;
};
console.log("data", reverseNumber(-12356));
