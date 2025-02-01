const role = 'middle';
let salary = 1000;

switch (role){
  case 'senior': {
    salary = salary * 10;
    break;
  }
  case 'middle': {
    salary = salary * 5;
    break;
  }
  case 'junior': {
    salary = salary * 2;
    break;
  }
  default:
    break;
}

console.log(salary);

