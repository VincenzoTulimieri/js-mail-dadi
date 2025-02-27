
//inserimeto dei numeri del giocatore
// bonus 
let userNumber = parseInt(prompt('Inserisci il numero'))

// let userNumber = Math.floor(Math.random() * 6) + 1 



//validazione del numero corretto
const isNumberValid = !isNaN(userNumber) && userNumber <= 6;

if(isNumberValid){
    
    // calcolo del vincitore

    let number = Math.floor(Math.random() * 6) + 1

    if(userNumber > number){
        console.log(`Ti è uscito il numero ${userNumber}, Hai vinto`)
    }else if (userNumber < number) {
        console.log(`Mi è uscito il numero ${number}, Hai perso`)
    }

}else{

    console.log('Il numero inserito non è correto, non barare');
}

