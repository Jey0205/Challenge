function spiral(param1) {
    
   const hasil = []


    let matrix = []
    for (let i = 0; i < param1; i++) {
        let arr1 = []
        for (let j = i * param1; j < param1 * (i + 1); j++) {
            arr1.push(j)
        }
        
        matrix.push(arr1)
    }
   

    let kiri = 0
    let atas = 0
    let kanan = matrix[0].length - 1
    let bawah = matrix.length - 1
    let arah = 'kanan'
    while (kiri <= kanan && atas <= bawah) {
        if (arah === 'kanan') {
            for (let i = kiri; i <= kanan; i+= 1) {
                hasil.push(matrix[atas][i])
            }
            atas += 1
            arah = 'bawah'
        }
        else if (arah === 'bawah'){
            for (let i = atas; i <= bawah; i+= 1) {
                hasil.push(matrix[i][kanan])
            }
            kanan -= 1
            arah = 'kiri'
        }
        else if (arah === 'kiri'){
            for (let i = kanan; i >= kiri; i-= 1) {
                hasil.push(matrix[bawah][i])
            }
            bawah -= 1
            arah = 'atas'
        }
        else if (arah === 'atas'){
            for (let i = bawah; i >= atas; i-= 1) {
                hasil.push(matrix[i][kiri])
            }
            kiri += 1
            arah = 'kanan'
        }
    }
    return hasil
}


console.log(spiral(5))
console.log(spiral(6))
console.log(spiral(7))