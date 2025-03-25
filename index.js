
class Vehicle {
    constructor(make, model, year, mile) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mile = mile;
    }

    drive(distance) {
        this.mile += distance;
    }

    info() {
        return `${this.year} ${this.make} ${this.model}, пробег: ${this.mile} km`
    }
}

class Car extends Vehicle {
    constructor(make, model, year, mile, numDoors) {
        super(make, model, year, mile);
        this.numDoors = numDoors;
    }

    info() {
        return `${super.info()}, двери: ${this.numDoors}`;
    }
}


class Truck extends Vehicle {
    constructor(make, model, year, mile, cargoCapacity) {
        super(make, model, year, mile);
        this.cargoCapacity = cargoCapacity;
    }

    info() {
        return `${super.info()}, грузоподъемность: ${this.cargoCapacity} кг`;
    }
}


const myCar = new Car('Toyota', 'Corolla', 2015, 50000, 4);
console.log(myCar.info());
myCar.drive(150);
console.log(myCar.info());

const myTruck = new Truck('Ford', 'F-150', 2018, 30000, 1000);
console.log(myTruck.info());
myTruck.drive(200);
console.log(myTruck.info());