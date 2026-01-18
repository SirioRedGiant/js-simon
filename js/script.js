//! Elementi richiamati tramite una variabile
const countdownEl = document.getElementById("countdown");
const listEl = document.getElementById("numbers-list");
const formEl = document.getElementById("answers-form");
const inputs = document.getElementsByTagName("input"); //note  dice al browser: "vai nel documento e prendi tutti gli elementi che hanno il tag <input>". Non restituisce un singolo elemento ma una collezione simile ad un array. Ci si può ciclare perchè si può accedere ai singoli input con le quadre e sapere quanti elementi contiene(inputs.lenght), ma non accetta altri metodi come .filter, però se si inserisce un altro input si aggiorna direttamente quindi non è statico come un array
console.log(inputs);

const messageEl = document.getElementById("message");

//! Generazione numeri randomici

// let n= Math.floor(Math.random() * (max - min + 1)) + min ===>//note  espressione per generare un numero intero random tra un min e un max. Se si toglie ".floor" saranno compresi anche i decimali
const numberToGuess = [];

while (numberToGuess.length < 5) {
  let randomNumber = Math.floor(Math.random() * 50) + 1;
  if (!numberToGuess.includes(randomNumber)) {
    numberToGuess.push(randomNumber);
  }
}

console.log("Numeri generati da indovinare: " + numberToGuess);

for (let i = 0; i < numberToGuess.length; i++) {
  listEl.innerHTML += `<li>${numberToGuess[i]}</li>`;
}

//! Timer ai numeri generati

let seconds = 3;
countdownEl.innerHTML = seconds;


const timer = setInterval(function () {
  seconds -= 1;
  countdownEl.innerHTML = seconds;

  if (seconds === 0) {
    clearInterval(timer);
    formEl.classList.remove("d-none"); //note rimuovo da index.html la classe ["d-none"=>(di)"answer-form"] di Bootstrap a 0 sec in modo tale che il form dei quadratini in cui scrivere, che era nascosta, appaia
    listEl.classList.add("d-none"); //note aggiungo a index.html la classe ["d-none"=>(di)"numbers-list"] per fare in modo che i 5 numeri generati da memorizzare scompaiano una volta che il tempo è scaduto
  }
}, 1000);

//! Controllo input utente

formEl.addEventListener("submit", function (event) {
  event.preventDefault();//note impedisce al browser di ricaricare la pagina quando si premi invia(comportamento standard dei form HTML). Senza si perderebbero i dati e il risultato sparisce subito

  
  const guessedNumbers = [];

  for (let i = 0; i < inputs.length; i++) {
    const userNumbers = parseInt(inputs[i].value);
  }
  console.log(`i numeri inseriti dall'utente sono : ${userNumbers}`);

  // Confronto degli input utente con i numeri generati random(numberToGuess)
  for (let i = 0; i < userNumbers.length; i++) {
    //fixed Il numero è tra quelli da indovinare?
    if (numberToGuess.includes(userNumbers[i])) {
      //fixed è già aggiunto alla lista di quelli indovinati?
      if (!guessedNumbers.includes(userNumbers[i])) {
        guessedNumbers.push(userNumbers[i]);
        console.log(userNumbers[i] + "è presente");
      } else {
        //note questo else si riferisce al if dei duplicati
        console.log(`${userNumbers[i]} già presente`);
      }
    } else {
      //note questo else si riferisce al primo if
      console.log(`${userNumbers} non hai indovinato`);
    }
  }
  messageEl.innerHTML = `Hai indovinato ${guessedNumbers.length} numeri`;
});
