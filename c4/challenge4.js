
function indexPrime(param1){
    let a = []
    let b = []
   for( let i = 2; i < param1 * param1; i++){
       let isPrime = true
       for( j = 2; j < i; j++){
           if( i % j == 0){
            isPrime = false
           break
           }
       }
       if( isPrime ){
           a.push(i)
       }
   }
   for( let k = 0; k < a.length; k++){
       if( k == param1-1 ){
           b.push(a[k])
       }
   }
        return b   
}
console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))