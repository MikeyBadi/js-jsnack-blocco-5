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
    lengthZucchina: "15"
  },
  {
    name: "Zucchino ortolano di Faenza",
    weight: "125",
    lengthZucchina: "15"
  },
  {
    name: "Zucchina lunga fiorentina",
    weight: "72",
    lengthZucchina: "15"
  },
  {
    name: "Zucchina striata di Napoli",
    weight: "300",
    lengthZucchina: "15"
  },
  {
    name: "Zucchina bianca triestina",
    weight: "83",
    lengthZucchina: "15"
  },
  {
    name: "Zucchina rigata pugliese",
    weight: "55",
    lengthZucchina: "15"
  },
  {
    name: "Zucchino tondo di Piacenza",
    weight: "92",
    lengthZucchina: "15"
  },
  {
    name: "Zucchino tondo di Nizza",
    weight: "89",
    lengthZucchina: "15"
  },
  {
    name: "Zucchino tondo di Firenze",
    weight: "85",
    lengthZucchina: "15"
  }
];

console.log(zucchine);
console.log(zucchine.length);


for(let singleWeight of zucchine){
  zucchineWeight += parseInt(singleWeight.weight);
}
console.log(zucchineWeight);

document.querySelector(".result").innerHTML=`Il peso totale di tutte le zucchine è ${zucchineWeight} grammi.`