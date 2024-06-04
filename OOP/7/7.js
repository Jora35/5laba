class Employee {
	show(zp) {
		console.log(this.name);
		return zp;
	}
}

let user = new Employee;
user.name = 'Gregor';
console.log(user.show('30000'));