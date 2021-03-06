class CarFactory{
    constructor(carName,yearProduction){
        this.carName = carName;
        this.yearProduction = yearProduction;
    }
    totalPerYear(){
        let year = 365
        return Math.floor(Math.random() * 11) * year
    }
    carAge(){
        let today = new Date();
        let carLaunch = this.yearProduction;
        return today.getFullYear() - carLaunch
    }
}

class Porsche extends CarFactory{
    constructor(carName,yearProduction,tires,doors,seats,headlamps){
        super(carName,yearProduction);
        this.tires = tires;
        this.doors = doors;
        this.seats = seats;
        this.headlamps = headlamps;
    }
    name(){
        console.log(`This is ${this.carName}`)
    }
    totalPerYear(){
           super.totalPerYear()
           console.log(`Total production Porsche per year ${super.totalPerYear()}`)
       }
    launch(){
        console.log(`This car was launched in ${this.yearProduction}`)
    }   
    carAge(){
           super.carAge()
           console.log(`The car age is ${super.carAge()}`)
       }
    tire(){
        console.log(`Total tires ${this.tires}`)
    }
    door(){
        console.log(`Total door ${this.doors}`)
    }
    seat(){
        console.log(`Total seat ${this.seats}`)
    }
    headlamp(){
        console.log(`Total headlamp ${this.headlamps}`)
    }
}

class Toyota extends CarFactory{
    constructor(carName,yearProduction,tires,doors,seats,headlamps){
        super(carName,yearProduction);
        this.tires = tires;
        this.doors = doors;
        this.seats = seats;
        this.headlamps = headlamps;
    }
    name(){
        console.log(`This is ${this.carName}`)
    }
    totalPerYear(){
           super.totalPerYear()
           console.log(`Total production Toyota per year ${super.totalPerYear()}`)
    }
    launch(){
        console.log(`This car was launched in ${this.yearProduction}`)
    }
    carAge(){
           super.carAge()
           console.log(`The car age is ${super.carAge()}`)
    }
    tire(){
        console.log(`Total tires ${this.tires}`)
    }
    door(){
        console.log(`Total door ${this.doors}`)
    }
    seat(){
        console.log(`Total seat ${this.seats}`)
    }
    headlamp(){
        console.log(`Total headlamp ${this.headlamps}`)
    }
}



let porsche = new Porsche('Carerra',2003,4,2,2,2)
porsche.name()
porsche.launch()
porsche.totalPerYear()
porsche.carAge()

let b = new Toyota('Kijang',2015,4,4,8,2)
b.name()
b.launch()
b.totalPerYear()
b.carAge()