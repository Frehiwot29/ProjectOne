let prompt = require("prompt-sync")();
let redius=prompt("Enter the value of redius");
let heigth=prompt("Enter the value of heigth");
   redius = parseFloat(redius);
   heigth=parseFloat(heigth);
   let volume=Math.PI*Math.pow(redius,2)*heigth;
   //let volume2=Math.PI*redius*redius*heigth;
   console.log("My volum" + " " + volume);
  // console.log("My volum2" + " " + volume2);