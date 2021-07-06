class CarFactory {
    constructor(){
        this.car1 = new Porsche('Carera', 2015)
    }
    
    productionPerYear(){
        let year = 365
        let production = Math.floor(Math.random(1)* 11) * year
      
        console.log(`Total this car Per year ${production}`);
        
}
    garantion(){
        let today = new Date();
        console.log(`You will have garantion every 5 years, and you'll get in ${today.getFullYear() + 5}`)
    }
    carAge(){
        let today = new Date()
        console.log(`The car age is ${today.getFullYear() - this.car1.launched} in ${today.getFullYear()}`)
    }
}

class Car{
    constructor(){
        this.tires = 4
        this.doors = 2
        this.seats = 2
        this.headlamps = 2
        this.backlamps = 2
       
    }

}



class Porsche extends Car{
    constructor(name,launched){
        super()
        this.name = name;
        this.launched = launched;
    }

    productionPerYear(){
        let total = CarFactory.perYear
        console.log(`Total ${this.name} Per year ${total}`);
    }
    carAge(){
        let today = new Date();
        let carLaunch = this.launched;
        console.log(`The car age is ${today.getFullYear() - carLaunch} in ${today.getFullYear()}`)
    }
    garantion(){
        
        let today = new Date();
        console.log(`You will have garantion every 5 years, and you'll get in ${today.getFullYear() + this.CarFactory.garantion()}`)
    }
    
}

class Toyota extends Car{
    constructor(name,launched){
        super()
        this.name = name;
        this.launched = launched;
    }


    productionPerYear(){
        
        console.log(`Total ${this.name} Per year ${total}`);
    }
    carAge(){
        let today = new Date();
        let carLaunch = this.launched;
        console.log(`The car age is ${today.getFullYear() - carLaunch} in ${today.getFullYear()}`)
    }
    garantion(){
        
        let today = new Date();
        console.log(`You will have garantion every 5 years, and you'll get in ${today.getFullYear() + this.CarFactory.garantion()}`)
    }
    
    
}

    
let car = new CarFactory()


console.log(car.car1);
car.productionPerYear()
car.carAge()
car.garantion()
