class Employee {
	show(name, surn) {
		return name + '-_-' + surn;
	}
}

let user = new Employee;

console.log(user.show('john', 'smit'));