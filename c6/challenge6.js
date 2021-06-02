function sentenceManipulation(sentence){
 var words = sentence.split(' ')
 let output = ''
 for(let i = 0; i < words.length; i++){
     output += stringManipulation(words[i])
    
 } console.log(output)
   
   
}   

sentenceManipulation('ibu pergi ke pasar bersama aku')

//output ibu ergipnyo eknyo asarpnyo ersamabnyo aku


function stringManipulation(word) {
    let a = ''
    if( word.charAt(0) == 'a'|| word.charAt(0) == 'i'||word.charAt(0) == 'u'||word.charAt(0) == 'e'||word.charAt(0) == 'o')
    {a += word + ' '}
    
    else{
        a += word.slice(1) + word[0] + 'nyo' + ' '
    }
    return a

}
