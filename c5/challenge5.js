function stringManipulation(word) {
    if( word.charAt(0) == 'a'|| word.charAt(0) == 'i'||word.charAt(0) == 'u'||word.charAt(0) == 'e'||word.charAt(0) == 'o')
    console.log(word)
    else{
        console.log(word.slice(1) + 'nyo')
    }
}


stringManipulation('ayam') //ayam
stringManipulation('bebek')//ebeknyo