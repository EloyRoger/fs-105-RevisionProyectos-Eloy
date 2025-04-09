import "bootstrap";
import "./style.css";


window.onload = function() {
  // Variables
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  // Declaracion aleatoria
  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * what.length);
  let rdm4 = Math.floor(Math.random() * when.length);

  // Creador de frase (excuse)
  document.querySelector("#excuse").innerHTML = 
    who[rdm1] + " " + action[rdm2] + " " + what[rdm3] + " " + when[rdm4] + ".";
}



let pronoun1 = ['the', 'our'];
let adj1 = ['great', 'big'];
let noun1 = ['jogger', 'racoon'];
let exten1 = ['.com','.es']

for (let i = 0; i < pronoun1.length; i++) {
  for (let j = 0; j < adj1.length; j++) 
    for (let k = 0; k < noun1.length; k++) {
        for (let l = 0; l < exten1.length; l++) {
    //   console.log(pronoun1[i] + adj1[j] + noun1[k] + exten1[l]);
    }
  }
}