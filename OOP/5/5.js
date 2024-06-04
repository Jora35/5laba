class Employee {
	show() {
		return 'you re fired';
	}
}

let user = new Employee;

console.log(user.show()); // выведет ' you re fired'