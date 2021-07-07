export default class MesinHitung {
    constructor() {
        
        this.numbers = 1

    }
    tambah(numbers) {
        this.numbers += numbers

        return this
    }
    kurang(numbers) {
        this.numbers -= numbers
        return this
    }
    bagi(numbers) {
        this.numbers /= numbers
        return this
    }
    kali(numbers) {
        this.numbers *= numbers
        return this
    }
    akarPangkat2() {
        this.numbers = Math.pow(this.numbers,2)
        return this
    }
    exponent(numbers) {
        this.numbers = Math.pow(this.numbers,numbers)
        return this
    }
    akar(numbers){
        this.numbers = Math.sqrt(this.numbers)
        return this
    }
    hasil() {
        return console.log(this.numbers)
    }
}

export const Pi = 22/7