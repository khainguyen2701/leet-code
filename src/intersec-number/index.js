const intersect = (array1, array2) => {
  let obj = {};
  const values = [];
  for (item of array1) {
    obj[item] = (obj[item] || 0) + 1;
  }
  for (item of array2) {
    if (obj[item] > 0) {
      values.push(item);
      obj[item]--;
    }
  }
  return values;
};

intersect([1, 2, 2, 1], [2, 2]);

/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 *
 * First loop will return obj = { '1': 2, '2': 2}
 * Then turn seconds loop. function will be subtract obj[key] if obj[key] rather than 0 and push key into array.
 * loop until the end of array and return values is value intersects
 */
