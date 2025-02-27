// inserimento email-list
const emailList = [
    'vincenzo@outlook.it',
    'margherita@gmail.com',
    'stefano@gmail.com',
    'gianluca@outlook.it',
    'elena@gmail.com',
    'giulia@tiscali.it',
    'marco@gmail.com',
]



let emailFound = false

// inserico l'input per l'iserimeto dati da parte del user 

let userEmail = prompt('Inserisci la tua Email');


// creo ciclo "for" per verificare che la email è presenete in lista 

for(let i = 0; i < emailList.length; i++) {
    let emailValid = emailList[i];

    if(userEmail === emailValid){
        emailFound = true
        break
    }    
}
// stampo messaggio di validazione o non validazione

    if(emailFound){
        console.log('Email valida')
        
    } else {
        console.log('Email non valida')
        
    }