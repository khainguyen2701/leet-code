const maxProfit = (array) => {
  if (array.length === 0) return 0;
  let maxProfit = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i - 1] > 0) {
      maxProfit += array[i] - array[i - 1];
    }
  }
  return maxProfit;
};

//Diễn giải
/**
 * @params is a freely numbers array
 * Check array available and cannot empty then continue implement under logic
 * Loop by i and check array [i]th - array [i-1]th greater than zero. and assign this value into 
 * maxProfit and end of loop. we need return variable maxProfit.
 */
