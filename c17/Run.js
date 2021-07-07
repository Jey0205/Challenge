import MesinHitung,{Pi} from "./MesinHitung";

var mh = new MesinHitung()

mh.tambah(10).kurang(5).hasil();
mh.tambah(3).kali(4).bagi(6).hasil()

mh.numbers = 7

console.log(`Nilai sekarang : ${mh.numbers}`)

mh.kali(2).kali(Pi).hasil();
mh.numbers = 7
mh.akarPangkat2().kali(Pi).hasil()
mh.numbers = 4
mh.exponent(3).hasil()
mh.akar().hasil()

