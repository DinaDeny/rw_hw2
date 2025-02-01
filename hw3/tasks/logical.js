const one = 1;

const foo = '34';

const isFalse = false;

const nullable = null;

const notDefined = undefined;

console.log(one > foo);
console.log(foo <= isFalse);

console.log(one || foo);
console.log(foo && isFalse);
console.log(!isFalse);

console.log(nullable ?? foo);
console.log(notDefined ?? one);
console.log(isFalse ?? nullable);


