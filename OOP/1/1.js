class Car {
	color; // цвет автомобиля
	fuel;  // количество топлива
	
	// Команда ехать:
	go() {
		// какой-то JavaScript код
	}
	
	// Команда поворачивать:
	turn() {
		// какой-то JavaScript код
	}
	
	// Команда остановиться:
	stop() {
		// какой-то JavaScript код
	}
}

let myCar = new Car; // командуем заводу сделать автомобиль

myCar.color = 'red'; // красим в красный цвет
myCar.fuel = 50; 

myCar.go();
myCar.turn();
myCar.stop();