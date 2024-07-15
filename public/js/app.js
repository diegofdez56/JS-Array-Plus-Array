export function arrSum(arr1, arr2) {
  const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);
  return sumArray(arr1) + sumArray(arr2);
}
