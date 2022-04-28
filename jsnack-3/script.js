console.log("work");

const reversed = (word) => {
  let splitted = word.split("");
  let reversed = splitted.reverse();
  let recomp = reversed.join("");

  return recomp;
};

const word = prompt("Inserisci la tua parola da fare il reverse").toUpperCase()

document.querySelector(".result").innerHTML=`La tua parola è ${word} al contrario diventa: ${reversed(word)}`