/* --------------------------------------------------------------------
GENERIC INITIALIZATION AND DECLARATION */

// * INITIALIZATIONS

// ? TAKING FROM THE DOM

const diceRollSection = document.querySelector('#dice-roll');
const btnRoll = document.querySelector('a.my-btn');
const btnRefresh = document.querySelector('a.my-btn.d-none');


// ? CREATION OF HTML ELEMENTS
const divContainer = document.createElement('div');





/* --------------------------------------------------------------------
MAIN CODE */

// * LINEAR PROGRAMM



// * EVENTS
btnRoll.addEventListener('click',function(){
    // ? INITIALIZATIONS AND DECLARATIONS

    // * Creating of HTML elements
    const resultComment = document.createElement('p');
    const userDiceNumberContainer = document.createElement('span');
    const pcDiceNumberContainer = document.createElement('span');

    // * Creating of Variables
    let userDiceNumber = Math.floor(Math.random() * 6 + 1);
    let pcDiceNumber = Math.floor(Math.random() * 6 + 1);


    // ? ADDING THE CONTENT TO THE DICE ROLL HTML ELEMENTS
    userDiceNumberContainer.innerHTML = `Hai fatto ${userDiceNumber}`;
    pcDiceNumberContainer.innerHTML = `Ho fatto ${pcDiceNumber}`;
    
    
    // ? ADDING THE CONTENT TO THE RESULTcOMMENT ACCORDING TO THE CONDITIONS
    if(userDiceNumber < pcDiceNumber){
        resultComment.innerHTML = 'Hai perso';
    }
    else if(userDiceNumber > pcDiceNumber){
        resultComment.innerHTML = 'Hai vinto';
    }
    else{
        resultComment.innerHTML = 'Abbiamo pareggiato';
    }


    // ? APPENDING THE VARIOUS ELEMENTS TO THE CONTENT
    diceRollSection.append(divContainer);
    divContainer.append(userDiceNumberContainer);
    divContainer.append(pcDiceNumberContainer);
    divContainer.append(resultComment);
})


btnRefresh.addEventListener('click',function(){
    divContainer.remove();
    userDiceNumber.remove();
    pcDiceNumber.remove();
    resultComment.remove();
})