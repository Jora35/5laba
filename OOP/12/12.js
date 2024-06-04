class Employee {
	constructor(name, zp) {
		this.name = name;
		this.zp = zp;
	}
	show() {
		return this.name + ' ' + this.zp;
	}
}
let user = new Employee('john', '32 000');
console.log(user.show()); 

