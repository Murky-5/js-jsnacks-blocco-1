/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore */

const userInput = [];
let Numbers;
for (let i = 0; i <= 1; i++){
    Numbers = Number(prompt("inserisci un numero"))
    userInput.push(Numbers);
}

if (userInput[0] > userInput[1]){
    alert(userInput[0]);
}
else if (userInput[1] > userInput[0]){
    alert(userInput[1]);
}
else {
    alert("i numeri si equivalgono");
}

