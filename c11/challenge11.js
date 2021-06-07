const fs = require('fs')
const readline = require('readline');
const json = JSON.parse(fs.readFileSync("./data.json" , 'utf-8'))
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Tebakan:"
})
console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!')
console.log(' ')

let a = 0

console.log(json[a].pertanyaan)

rl.prompt()
rl.on('line', (tebakan) => {
    if(tebakan == json[a].jawaban){
        console.log('Selamat Anda Benar!')
        console.log(' ')
        a++
        if(a == 3){
            console.log('Hore Anda Menang!!')
            console.log(' ')
            process.exit()
        }
        console.log(json[a].pertanyaan)
    }else{
        console.log('wkwkwkwkwk, Anda kurang beruntung!')
        console.log(' ')
    }
    rl.prompt()
})

