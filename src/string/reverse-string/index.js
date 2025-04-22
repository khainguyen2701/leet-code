const reverseString = (array) => {
  const length = array.length;
  if (length <= 0) return array;
  let left = 0,
    right = length - 1;
  while (left < right) {
    const lChar = array[left];
    const rChar = array[right];
    array[left++] = rChar;
    array[right--] = lChar;
  }
  return array;
};
console.log("data", reverseString(["H", "a", "n", "n", "a", "h"]));
