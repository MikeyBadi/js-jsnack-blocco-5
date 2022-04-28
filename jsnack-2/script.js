console.log("work");

let zucchineWeight = 0;

const zucchine = [
  {
    name: "Zucchino nero di Milano",
    weight: "100",
    lengthZucchina: "15"
  },
  {
    name: "Zucchino romanesco",
    weight: "50",
    lengthZucchina: "18"
  },
  {
    name: "Zucchino ortolano di Faenza",
    weight: "125",
    lengthZucchina: "12"
  },
  {
    name: "Zucchina lunga fiorentina",
    weight: "72",
    lengthZucchina: "13"
  },
  {
    name: "Zucchina siciliano",
    weight: "300",
    lengthZucchina: "30"
  },
  {
    name: "Zucchina bianca triestina",
    weight: "83",
    lengthZucchina: "14"
  },
  {
    name: "Zucchina rigata pugliese",
    weight: "55",
    lengthZucchina: "16"
  },
  {
    name: "Zucchino tondo di Piacenza",
    weight: "92",
    lengthZucchina: "12"
  },
  {
    name: "Zucchino tondo di Nizza",
    weight: "89",
    lengthZucchina: "14"
  },
  {
    name: "Zucchino tondo di Firenze",
    weight: "85",
    lengthZucchina: "17"
  }
];

const under = []
const over = []


for(let index in zucchine){
  (zucchine[index].lengthZucchina < 15) ? under.push(zucchine[index]) : over.push(zucchine[index])
}
console.log(under);
console.log(over);

let zucchineUnderWeight = 0
let zucchineOverWeight = 0

for(zucW of under){
  zucchineUnderWeight += parseInt(zucW.weight)
}

console.log(zucchineUnderWeight);

for(zucW of over){
  zucchineOverWeight += parseInt(zucW.weight)
}

console.log(zucchineOverWeight);

document.querySelector(".result").innerHTML=`Il peso totale di tutte le zucchine sotto i 15 cm è ${zucchineUnderWeight} grammi, quelle oltre i 15cm è ${zucchineOverWeight}`;