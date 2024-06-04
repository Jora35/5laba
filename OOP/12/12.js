class Employee {
	constructor(name, zp) {
		this.name = name;
		this.zp = zp;
	}
	show() {
		return this.name + ' ' + this.zp;
	}
	uvelich(){
	    return this.zp * 10/100 + this.zp
	}
}
let user = new Employee('john', 32000);
console.log(user.show()); 
console.log(user.uvelich()); 

