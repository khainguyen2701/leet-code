const containsDuplicate1 = (array) => {
  const obj = new Set();
  for (let i = 0; i < array.length; i++) {
    if (obj.has(array[i]) === true) return true;
    obj.add(array[i]);
  }
  return false;
};

const containsDuplicate2 = (array) => {
  let obj = {};
  let isDuplicate = false;
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      isDuplicate = true;
    } else {
      obj[array[i]] = true;
    }
  }
  return isDuplicate;
};

/**
 * @function containsDuplicate1 => runtime (11ms), Memory Usage: 66.1 MB
 *  - Usage class Set of JS to save data not duplicate, SET is a object {}
 *  - Loop and check if condition, if true then return and exit loop.
 * @function containsDuplicate2 => runtime (27ms), Memory Usage: 68 MB
 *  - Usage new variable is a obj => take memory, have to run full loop to check condition => take time 
 */
