class Employee {
	show(surn) {
		return surn;
	}
	sep() {
		console.log(this.name); // объект
	}
}

let user = new Employee;
user.name = 'john';
user.sep();
console.log(user.show('smit'));