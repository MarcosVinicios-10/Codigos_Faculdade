function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    };
  };

  // Usa concat para juntar os arrays
  return quickSort(left).concat(pivot, quickSort(right));
};

// Exemplo:
const array = [5, 3, 7, 6, 2, 1, 4];
console.log(quickSort(array)); // [1, 2, 3, 4, 5, 6, 7]