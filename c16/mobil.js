class CarFactory{
    constructor(brand,totalProduction){
        this.brand = brand;
        this.totalProduction = totalProduction;
    }
    totalPerMonth(){
        let month = 30
        return `Total Production per month ${this.totalProduction *= month}`
    }
}

class Spec extends CarFactory{
    constructor(brand,totalProduction,doors,tires,headLamps,backLamps,sideMirrors,seats){
        super(brand,totalProduction)
        this.doors = doors;
        this.tires = tires;
        this.headLamps = headLamps;
        this.backLamps = backLamps;
        this.sideMirrors = sideMirrors;
        this.seats = seats;
    }
    door(){
        return `Total doors ${this.doors}`
    }
    tire(){
        return `Total tires ${this.tires}`
    }
    headLamp(){
        return `Total head lamps ${this.headLamps}`
    }
    backLamp(){
        return `Total back lamps ${this.backLamps}`
    }
    sideMirror(){
        return `Total side mirrors ${this.sideMirrors}`
    }
    seat(){
        return `Total seat ${this.seats}`
    }

}

class Car extends Spec{
    constructor(carName,year,brand,totalProduction,doors,tires,headLamps,backLamps,sideMirrors,seats){
        super(brand,totalProduction,doors,tires,headLamps,backLamps,sideMirrors,seats);
        this.carName = carName;
        this.year = year
    }
    car(){
        return `The car name is ${this.carName}`
    }
    years(){
        return `The car was launched in ${this.year}`
    }
    garantion(){
        return `The car will have garantion every 5 year and you'll get in ${this.year + 5}`
    }
}

let porsche = new Car('Cayman',2020,'Porsche',6,2,4,2,2,2,2)
let toyota = new Car('Kijang',2018,'Toyota',50,4,4,2,2,2,6)

console.log(porsche.car())
console.log(porsche.years());
console.log(porsche.totalPerMonth())
console.log(porsche.garantion())

