function sentenceManipulation(sentence){
    var words = sentence.split(' ')
    let output = ''
    for(let i = 0; i < words.length; i++){
        output += stringManipulation(words[i])
       
    } return output
      
      
   }   
   

   
   //output ibu ergipnyo eknyo asarpnyo ersamabnyo aku
   
   
   function stringManipulation(word) {
       let a = ''
       if( word.charAt(0) == 'a'|| 
       word.charAt(0) == 'i'||
       word.charAt(0) == 'u'||word.charAt(0) == 'e'||
       word.charAt(0) == 'o')
       {a += word + ' '}
       
       else{
           a += word.slice(1) + word[0] + 'nyo' + ' '
       }
       return a
   
   
    }


    
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Tulis kalimatmu disini> '
    });
    
    rl.prompt();
    
    rl.on('line', (line) => {
     console.log(sentenceManipulation(line))
      rl.prompt();
      
    }).on('close', () => {
      console.log('Good bye!');
      process.exit(0);
    });