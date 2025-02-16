const arr1: number[] = [23, 24, 28, 37, 40];
const arr2: string[] = ['Jane', 'Ann', 'Alice', 'Dona', 'Mop'];


function sum(array: number[] ): number  {
    return array.reduce((a, b) => a + b);
};

function stringConcat(array: string[] ): string {
    return array.reduce((a, b) => a + b);
};

console.log(sum(arr1));
console.log(stringConcat(arr2));
