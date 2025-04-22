const rotateImage = (array) => {
  const length = array.length;
  if (length === 0) return [];
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      [array[i][j], array[j][i]] = [array[j][i], array[i][j]];
    }
  }
  for (let row of array) {
    row.reverse();
  }
  return array;
};
console.log(
  "data",
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
