console.time("in");
const twoSum = (array, target) => {
  const length = array.length;
  if (length <= 1) {
    return [];
  }
  let values = {};
  for (let i = 0; i < length; i++) {
    const subtract = target - array[i];
    if (subtract in values) {
      return [values[subtract], i];
    }
    values[array[i]] = i;
  }
  return [];
};

console.log("123", twoSum([2, 11, 15, 7, 3, 5], 9));
console.timeEnd("in");
