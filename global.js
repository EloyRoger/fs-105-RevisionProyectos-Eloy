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

const PRONOUM = ['the', 'our'];
const ADJ = ['great', 'big'];
const NOUN = ['jogger', 'racoon'];
const EXTEN = ['.com','.es']

const domain = () => {
  const combination = []
  PRONOUM.forEach(function(p) {
      ADJ.forEach(function(a) {
        NOUN.forEach(function(n) {
          EXTEN.forEach(function(e) {
           combination.push (`${p}${a}${n}${e}`)
          });
        });
      });
    });
    return combination
}

const global = (type)=> {
if(type === "excuse"){
    return generateExcuse()
}
return domain()
}

console.log(global("domain"));
