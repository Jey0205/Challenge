function weirdMultiply(sentence) {
    var a = sentence.toString()

    if (a.length > 1) {
        var b = 1;

        for (let i = 0; i < a.length; i++) {
            b = b * a[i];
        }
        return weirdMultiply(b)
    }
    else{
        return sentence
    }


}
console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))