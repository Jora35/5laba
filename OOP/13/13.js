class Employee {
	#name;
	#surname;
	#zp;

	constructor(name, surname, zp) {
		this.#name = name;
		this.#surname = surname;
		this.#zp = zp;
	}
	
	show() {
		return this.#name;
		return this.#surname;
		return this.#zp;
	}
}
let user = new Employee('john','Doodl',32000 );
console.log(user.show()); 
