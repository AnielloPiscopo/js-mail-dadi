/* --------------------------------------------------------------------
GENERIC INITIALIZATION AND DECLARATION */

// * INITIALIZATIONS

// ? ARRAYS
const validEmailsList = [
    'aniello.piscopo0707@gmail.com',
    'aniello.piscopo07@gmail.com',
    'aniello.piscopo0707@outlook.com',
    'aniello.piscopo07@outlook.com',
]


// ? TAKING ELEMENTS FROM THE DOM
const verificationEmailSection = document.querySelector('#verification-email');
const form = document.querySelector('#verification-email form');
const btnVerficationEmail = document.querySelector('#verification-email .my-btn');
const emailInputArea = document.querySelector('#verification-email input');





/* --------------------------------------------------------------------
MAIN CODE */

// ? EVENTS
btnVerficationEmail.addEventListener('click' , function(){
    let email = emailInputArea.value;
    const pElementVerficationEmail = document.createElement('p');
    let correctEmailPosition = '';


    for(let i=0 ; i<validEmailsList.length ; i++){
        if(validEmailsList[i] === email){
            correctEmailPosition = validEmailsList.indexOf(email);
        }


        pElementVerficationEmail.addEventListener('click' , function(){
            pElementVerficationEmail.remove();
        })
    }

    if(validEmailsList[correctEmailPosition] === email){
        pElementVerficationEmail.innerHTML = 'Email valida';
        emailInputArea.classList.add('correct');
        emailInputArea.classList.remove('error');
    }
    else{
        pElementVerficationEmail.innerHTML = 'EMAIL NON PRESENTE';
        emailInputArea.classList.add('error');
        emailInputArea.classList.remove('correct');
    }


    form.after(pElementVerficationEmail);
})