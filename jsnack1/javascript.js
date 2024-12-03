/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore */

let userInput = []
for (let i = 0; i <= 1; i++){
    let firstNumber = prompt("inserisci un numero")
    userInput.unshift[firstNumber]
}

if (userInput[0] > userInput[1]){
    prompt("il primo numero è maggiore del secondo")
}
else if (userInput[0] < userInput[1]){
    prompt("il secondo numero è maggiore del primo")
}
else {
    prompt("i numeri si equivalgono")
}