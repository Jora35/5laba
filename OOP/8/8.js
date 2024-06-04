class  Student {
	name;
	surn;
	
	show() {
		return this.cape(this.name);
	}
    cape(str) {
        return str[0].toUpperCase() + str.slice(1);
	}
	
	
	inizialname(){
	    return this.inizial(this.name);
	}
	
	inizial(str) {
        return str[0].toUpperCase();
	}

}

let user = new Student;
user.name = 'john';
console.log(user.show());
console.log(user.cape("doodl"));

console.log(user.inizialname());
console.log(user.inizial("doodl"));

