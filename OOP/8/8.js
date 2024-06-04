class  Student {
	name;
	surn;
	show() {
		return this.name;
	}
    cape(str) {
        return str[0].toUpperCase() + str.slice(1);
	}

}

let user = new Student;
user.name = 'john';
user.surn = 'foffo';
console.log(user.show());
console.log(user.cape("doodl"));

