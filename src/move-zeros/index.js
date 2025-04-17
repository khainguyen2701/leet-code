const moveZeros = (array) => {
  const length = array.length;
  let lastNoneZero = 0;
  if (length <= 1) {
    return array;
  }

  for (let i = 0; i < length; i++) {
    if (array[i] !== 0) {
      array[lastNoneZero] = array[i];
      lastNoneZero++;
    }
  }

  for (let i = lastNoneZero; i < length; i++) {
    array[i] = 0;
  }
  return array;
};

console.log("123", moveZeros([0, 1, 0, 3, 12]));

/**
 * @function moveZeros move item zeros to end of array
 * declare lastNoneZero is 0
 * for one. loop and find items not 0, and increment lastNoneZero 1 unit, and assign array[lastNoneZero] = array[i]
 * for two. loop from lastNoneZero and assign items = 0
 * DONE
 */
