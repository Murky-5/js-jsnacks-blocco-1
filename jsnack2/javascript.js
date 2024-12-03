// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const gasbyInvitates = ["cc", "caca", "canbagnatocodanonmorde", "plinplin"];
const ceckList = prompt("sei un invitato? Dimmi pure come ti chiami");
let welcome = NaN;

for (let i = 0; i <= gasbyInvitates.length; i++) {
    if (gasbyInvitates[i] === ceckList.toLowerCase()){
        welcome = alert("Entra pure, il bagno del grande Gasby è in fondo a destra");
    }
}

if (isNaN(welcome)) {
    alert("nada da fare, non sei in lista. Gira i tacchi")
}
