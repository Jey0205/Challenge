class CarFactory {

    productionPerYear(){
        let year = 365
        let production = Math.floor(Math.random(1)* 11) * year
        return production
    }
    garantion(){
        return +5
    }
}

class Car{
    constructor(){
        this.tires = 4
        this.doors = 2
        this.seats = 2
        this.headlamps = 2
        this.backlamps = 2
        this.CarFactory = new CarFactory()
    }
    perYear(){
     return this.CarFactory.productionPerYear()
    }
    garantion(){
        return this.CarFactory.garantion()
    }

}



class Porsche extends Car{
    constructor(name,launched){
        super()
        this.name = name;
        this.launched = launched;
    }

    productionPerYear(){
        super.perYear()
        console.log(`Total ${this.name} Per year ${super.perYear()}`);
    }
    carAge(){
        let today = new Date();
        let carLaunch = this.launched;
        console.log(`The car age is ${today.getFullYear() - carLaunch} in ${today.getFullYear()}`)
    }
    garantion(){
        super.garantion()
        let today = new Date();
        console.log(`You will have garantion every 5 years, and you'll get in ${today.getFullYear() + super.garantion()}`)
    }
    
}

class Toyota extends Car{
    constructor(name,launched){
        super()
        this.name = name;
        this.launched = launched;
    }

    productionPerYear(){
        super.perYear()
        console.log(`Total ${this.name} Per year ${super.perYear()}`);
    }

    carAge(){
        let today = new Date();
        let carLaunch = this.launched;
        console.log(`The car age is ${today.getFullYear() - carLaunch} in ${today.getFullYear()}`)
    }
    garantion(){
        super.garantion()
        let today = new Date();
        console.log(`You will have garantion every 5 years, and you'll get in ${today.getFullYear() + super.garantion()}`)
    }
    
}

    
let carera = new Porsche('Carera',2010)
let supra = new Toyota('Supra',2015)

console.log(carera);
carera.productionPerYear()
carera.carAge()
carera.garantion()

console.log('\n ------------------------------------------------------------------------ \n')

console.log(supra)
supra.productionPerYear()
supra.carAge()
supra.garantion()