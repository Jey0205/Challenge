class CarFactory {
    manufacture(launched) {
        let cars = [];
        let random = Math.floor(Math.random() * 10);
        for (let i = 0; i < random; i++) {
            let myCar = new Porsche("", "", "", "", launched);
            cars.push(myCar);
        }
        for (let i = 0; i < random; i++) {
            let myCar = new Toyota("", "", "", "", launched);
            cars.push(myCar);
        }
        return cars;
    }

    static guaranteeSimulation(array, currentYear) {
        array.forEach((element) => {
            element.launched = currentYear - element.launched;
            if (element.launched > element.garansi) {
                console.log(`The warranty of this car ${element.numberId} has been out`);
            }
        });
    }

    static productionOfYear(array) {
        console.log(`Total Production perYear is ${array.length} Car`);
    }

    

}


class Car {
    constructor() {
        this.numberId = this.create_uuid();
        this.tires = 4
        this.doors = 2
        this.seats = 2
        this.headlamps = 2
        this.backlamps = 2

    }
    create_uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    }

}

class Porsche extends Car {
    constructor(name) {
        super()
        this.name = name;
        this.launched = 2015;
        this.garansi = Math.floor(Math.random() * 5)
    }
}

class Toyota extends Car {
    constructor(name) {
        super()
        this.name = name;
        this.launched = 2020;
        this.garansi = Math.floor(Math.random() * 5)
    }
}

let porsche = new CarFactory()

let car = porsche.manufacture(2021)
CarFactory.guaranteeSimulation(car, 2025);
CarFactory.productionOfYear(car);


