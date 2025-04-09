// Variables
  const WHO = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const ACTION = ['ate', 'peed', 'crushed', 'broke'];
  const WHAT = ['my homework', 'my phone', 'the car'];
  const WHEN = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


const generateExcuse =() =>{
  return `${WHO[somexcuse(WHO)]} ${ACTION[somexcuse(ACTION)]} ${WHAT[somexcuse(WHAT)]} ${WHEN[somexcuse(WHEN)]}`
}

function somexcuse(exc) { 
  return Math.floor(Math.random() * exc.length);
}

console.log(generateExcuse());



//   // Declaracion aleatoria
//   let rdm1 = Math.floor(Math.random() * who.length);
//   let rdm2 = Math.floor(Math.random() * action.length);
//   let rdm3 = Math.floor(Math.random() * what.length);
//   let rdm4 = Math.floor(Math.random() * when.length);

//   // Creador de frase (excuse)
//  console.log(who[rdm1] + " " + action[rdm2] + " " + what[rdm3] + " " + when[rdm4] + ".");