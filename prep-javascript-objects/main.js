var person = {
  firstName: 'Michael',
  lastName: 'Hyland',
  hobby: 'Cycling'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'Data Collector';
console.log("The person's current job is: " + person.job);

person.previousJob = 'Bike Messenger';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);
