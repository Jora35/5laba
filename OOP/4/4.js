class Employee {
    name;
    surn;
}

let user = new Employee;
let user1 = new Employee;
let user2 = new Employee;

user1.name = 'john';
user2.name = 'eric';

user.name = 'john';
user.surn = 'smit';

console.log(user.name);
console.log(user.surn);

console.log(user1.name);
console.log(user2.name);