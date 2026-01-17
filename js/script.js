// Elementi richiamati tramite una variabile
const countdownEl = document.getElementById("countdown");
const listEl = document.getElementById("numbers-list");
const formEl = document.getElementById("answer-form");
const inputs = document.getElementsByTagName("input"); //note  dice al browser: "vai nel documento e prendi tutti gli elementi che hanno il tag <input>". Non restituisce un singolo elemento ma una collezione simile ad un array. Ci si può ciclare perchè si può accedere ai singoli input con le quadre e sapere quanti elementi contiene(inputs.lenght), ma non accetta altri metodi come .filter, però se si inserisce un altro input si aggiorna direttamente quindi non è statico come un array
console.log(inputs);

const messageEl = document.getElementById("message");
