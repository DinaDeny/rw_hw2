const role = 'senior';
let salary = 1000;


if (role === 'senior') {
  salary = salary * 10;
}
else if (role === 'middle') {
  salary = salary * 5;
}
else if  (role === 'junior') {
  salary = salary * 2;
}

console.log(salary);

