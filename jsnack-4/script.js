console.log("work");

const bicies = [
  {
    name:"Wilier 0 SLR",
    weight:"6.5"
  },
  {
    name:"Cannondale SuperSix EVOHi-MOD Disc Dura Ace	",
    weight:"8"
  },
  {
    name:"Trek Emonda 2020",
    weight:"6.8"
  },
  {
    name:"Trek Emonda SLR",
    weight:"4.6"
  },
  {
    name:"SAVA Phantom 2.0 700C",
    weight:"8.1"
  }
];


let lightWheigh = 10
let theLighter = bicies[0];


for(let peso of bicies){
  if(peso.weight < lightWheigh){
    lightWheigh = peso.weight
    
  }
}
console.log(theLighter);

let {name,weight} = bicies
console.log({name,weight});

document.querySelector(".result").innerHTML = `La bici più leggera è ${name} e pesa ${weight}Kg`
