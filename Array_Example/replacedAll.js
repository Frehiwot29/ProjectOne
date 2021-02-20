/**
 * write a function name replacedAll that takes an input string and modifies it
 * by replaceing the occurrance of first word (second parameter) with the second 
 * replacement word(third parameter).  
 * 
*/
function replaceAll(original_str, str_replaced, replacement) {
    let words = original_str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === str_replaced) {
            words[i] = replacement;

        }

    }
    return words.join(" ");

}
let mystr = "she said hi I said hi";
let modified = replaceAll(mystr, 'hi', 'hello');
console.log(modified);

/*function replacedAll(original_str, str_replaced, replacement){
    let words=original_str.split(" ");
    function myMapper(s){
        if(s===str_replaced){
        return replacement;
        }else{
            return s;
        }

    }
    words=words.map(myMapper);
    return words.join(" ");

}
let replaced=replacedAll("she said Hi and I replaced" , "she" , "Adonay and simom" );
console.log(replaced);*/
//another method
/*function replacedAll(original_str, str_replaced, replacement){
    let words=original_str.split(" ");
   
    words=words.map(s=>s===str_replaced?replacement:s);
    return words.join(" ");

}
let replaced=replacedAll("she said Hi and I replaced" , "she" , "Adonay and simom  Kalab" );
console.log(replaced);*/