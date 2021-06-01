function deretKaskus(n){
    let hasilnya = []
    for( let i = 3; i <= n * 3 ; i+=3){
        if( i % 5 == 0 && i % 6 == 0 ){
            hasilnya.push("KASKUS")
        }else if(i % 6 == 0){
            hasilnya.push("KUS")
        }else if(i % 5 == 0){
            hasilnya.push("KAS")
        }else hasilnya.push(i)
    }
    return hasilnya
    
}
console.log(deretKaskus(10))