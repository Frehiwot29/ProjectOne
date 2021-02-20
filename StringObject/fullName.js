/**
 * Write a function named extractGivenName with one parameter named fullName. 
 * The parameter fullName will always contain a person’s family and given names in that 
 * order separated by a comma and a single space, for example “Reagan, Ronald” 
 * (without the quotation marks). The function should extract and return the person’s given name, 
 * for example “Ronald” (without the quotation marks).
 * 
*/
function extractGivenName(fullName) {
    let space = fullName.indexOf(" ");
    let family = fullName.substring(space, fullName.length);
    return family;

}
console.log(extractGivenName("Asfaw, frehiwot"));
console.log(extractGivenName("Kassa, Adonay"));
console.log(extractGivenName("Kassa, Simon"));
console.log(extractGivenName("Kassa, Kal-ab"));