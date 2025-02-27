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

console.log(emailList)

 let userEmail = prompt('Inserisci la tua Email');


for(let i = 0; i < emailList.length; i++) {

    let emailValid = emailList[i];

    if(userEmail === emailValid){
        console.log('email corretta')
        break
    } else {
        console.log('email non corretta')
        break
    }
    
}


