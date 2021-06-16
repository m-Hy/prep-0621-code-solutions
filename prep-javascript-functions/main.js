function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return 'Wassup ' + name + '!!!??';
}

var hello = getGreeting('World');
console.log(hello);

function addAndMultiplyBy5(num1, num2) {
  var total = num1 + num2;
  return total * 5;
}

var total = addAndMultiplyBy5(10, 5);
console.log(total);

function multiplyAndDivideBy5(num1, num2) {
  var total = num1 * num2;
  return total / 5;
}

var final = multiplyAndDivideBy5(35, 10);
console.log(final);

function subractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subTotal = subractTwoNumbers(22, 7);
console.log(subTotal);

function getCircleCircumference(radius) {
  var firstCalc = radius * 2;
  return firstCalc * 3.14159265359;
}

var circ = getCircleCircumference(5);
console.log(circ);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var name = getFullName('Juan', 'Ramirez');
console.log(name);

function cube(number) {
  return number * number * number;
}

var cubeAnswer = cube(5);
console.log(cubeAnswer);
