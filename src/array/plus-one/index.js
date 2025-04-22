/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

plusOne([2, 3, 4]);

/**
 * @param {number[]} digits
 * @return {number[]}
 * Loop reverse. and condition is i>=0;
 * if item nth rather than 9 then convert item nth equal 0
 * if item nth less 9 then item(nth)++ and exit function.
 * if item nth equal 9 full item then convert item = 0 and add item at first array.
 */
