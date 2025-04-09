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
            
            // console.log(p + a + n + e);
           combination.push (`${p}${a}${n}${e}`)
          });
        });
      });
    });
    return combination
}

console.log(domain());




// let pronoun = ['the', 'our'];
// let adj = ['great', 'big'];
// let noun = ['jogger', 'racoon'];
// let exten = ['.com','.es']

// for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adj.length; j++) 
//     for (let k = 0; k < noun.length; k++) {
//         for (let l = 0; l < exten.length; l++) {
//       console.log(pronoun[i] + adj[j] + noun[k] + exten[l]);
//     }
//   }
// }







// pronoun.forEach(function(p) {
//   adj.forEach(function(a) {
//     noun.forEach(function(n) {
//       exten.forEach(function(e) {
//         console.log(p + a + n + e);
        
//       });
//     });
//   });
// });