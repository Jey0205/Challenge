const fs = require('fs')
const readline = require('readline');
const json = JSON.parse(fs.readFileSync("./data.json" , 'utf-8'))

let command = process.argv;

if(command.length == 2){
console.log('Tolong sertakan nama file sebagai inputan soalnya')
console.log("misalnya 'challenge12.js data.json'")
process.exit();
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Tebakan: ",
})


console.log('Selamat datang di permainan Tebak-tebakan. kamu akan diberikan pernyataan sesuai file ini "data.json"')
console.log('Untuk bermain, jawablah dengan jawaban yang sesuai.')
console.log('Gunakan "Skip" untuk menangguhkan pertanyaannya, dan diakhir pertanyaan akan ditanyakan lagi.')
console.log(' ')


let a = 0
let b = 1
console.log('Pertanyaan: ' + json[a].pertanyaan)

rl.prompt()
rl.on('line', (tebakan) => {
    if(tebakan == json[a].jawaban){
        console.log(' ')
        console.log('Anda Beruntung!')
        console.log(' ')
    
        
        a++
        b = 1     
        if(a == json.length){
            console.log('Anda Berhasil!')
            process.exit()   
        }
        console.log('Pertanyaan: ' + json[a].pertanyaan)
    }else if(tebakan == "skip"){
        const wadah = {
            pertanyaan: json[a].pertanyaan,
            jawaban: json[a].jawaban,
        }     
        json.push(wadah);
        fs.writeFileSync('./data.json', JSON.stringify(json))
        console.log(' ')
        a++
        b = 1
        console.log('Pertanyaan: ' + json[a].pertanyaan)
        if(a == json.length){
            console.log('Anda Berhasil!')
            process.exit()   
        }
        
    
        }else{
        console.log(' ')        
        console.log(`Anda kurang beruntung! anda telah salah kali ${b} silahkan coba lagi`)
        console.log(' ')    
        b++
    
        
    }
    rl.prompt()
});

