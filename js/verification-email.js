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


    for(let i=0 ; i<validEmailsList.length ; i++){
        if(validEmailsList[i] !== email){
            pElementVerficationEmail.innerHTML = 'EMAIL NON PRESENTE NELLA LISTA';
        }
        else{
            pElementVerficationEmail.innerHTML = 'Email valida';
        }


        form.after(pElementVerficationEmail);


        pElementVerficationEmail.addEventListener('click' , function(){
            pElementVerficationEmail.remove();
        })
    }
})