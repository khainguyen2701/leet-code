const singleNumber1 = (array) => {
  const count = {};

  for (const num of array) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const key in count) {
    if (count[key] === 1) {
      return Number(key);
    }
  }

  return null;
};

const singleNumber2 = (array) => {
  let value = 0;
  for (let num of array) {
    value ^= num;
  }
  return value;
};

/**
 * @function singleNumber1 =>take time => loop 2 time
 * @function singleNumber2 loop one time, and usage XOR (bit 00, 01) to compare (a ^ a = 0)
 */
