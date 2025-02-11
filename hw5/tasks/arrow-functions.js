const arr1 = [23, 24, 28, 37, 40];
const arr2 = ['Jane', 'Ann', 'Alice', 'Dona', 'Mop'];

const func = (array) => {
  let result =array[0];
  for (let i = 1; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

console.log(func(arr1));
console.log(func(arr2));
