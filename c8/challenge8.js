function pola(str) {
let hitungan = str.split(' ');
let hasil = [];

let angka = ['0','1','2','3','4','5','6','7','8','9',];

for(let i = 0; i < angka.length; i++){
    let x = hitungan[0].replace('#', angka[i]);
    for( let j = 0; j < angka.length; j++){
        let y = hitungan[4].replace('#', angka[j]);
        
        if(x * hitungan[2] == y){
            hasil.push(i, j);
        }
    }

  }
        return hasil;
}


console.log(pola('42#3 * 188 = 80#204'))// hasilnya : [8, 5]
console.log(pola('8#61 * 895 = 78410#5'))// hasilnya : [7, 9]