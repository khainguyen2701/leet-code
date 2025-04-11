const rotateArrayWithN = (array, number) => {
  const length = array.length;
  if (number <= 0 || length <= 0) return array;
  const balance = number % length;
  const arrayTemp = new Array(length);

  //   1
  for (let i = 0; i < balance; i++) {
    arrayTemp[i] = array[length - balance + i];
  }

  //   2
  for (let i = 0; i < length - balance; i++) {
    arrayTemp[balance + i] = array[i];
  }

  //   3
  for (let i = 0; i < length; i++) {
    array[i] = arrayTemp[i];
  }

  return array;
};

rotateArrayWithN([1, 2, 3, 4, 5, 6, 7], 3);

/**
 * @params array: array contain values is numbers
 * @params number: number to rotate
 *
 * Check array and number available if its false then return original array
 * declare: balance (remainder of division), arrayTemp (clone length of original array with item is empty)
 *
 * first FOR : use a loop to run through array with the condition that its not less than balance
 *  inside first for : assign item nth(length - balance + i) of array for item nth(i) of tempArray
 *
 * second FOR : use a loop to run through array with the condition that its not less than (length - balance) that
 * means is run through the remaining items after run the first FOR.
 *  inside second for: assign item nth(i) of array for item nth(balance + i  "remaining index")
 *
 * third FOR : transfer arrayTemp into array to return value base on the original array
 */
