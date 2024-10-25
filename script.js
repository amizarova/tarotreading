let cardsOnTheField = []
const maxCards = 4
const cardImages = [
    'assets/theFool.JPG',
    'assets/theMagician.JPG',
    'assets/thePriestess.JPG',
    'assets/theEmpress.JPG',
    'assets/theEmperor.JPG',
    'assets/theHierophant.JPG',
    'assets/theLovers.JPG',
    'assets/theChariot.JPG',
    'assets/theJustice.JPG',
    'assets/theHermit.JPG',
    'assets/theWheel.JPG',
    'assets/theStrength.JPG',
    'assets/theHangedMan.JPG',
    'assets/theDeath.JPG',
    'assets/theTemperance.JPG',
    'assets/theDevil.JPG',
    'assets/theTower.JPG',
    'assets/theStar.JPG',
    'assets/theMoon.JPG',
    'assets/theWorld.JPG',
    'assets/theJudgement.JPG',
    'assets/theSun.JPG',
]

document.getElementById('addCard').addEventListener('click', addCardToField)

function addCardToField() {
    if(cardsOnTheField.length < maxCards) {
        const card = document.createElement('div')
        card.classList.add('card');
        document.getElementById('cardsField').appendChild(card);
        cardsOnTheField.push(card);
        card.addEventListener('click', function(){
             flipCard(card)
            })
        
    }
}

function flipCard(card) {
    if (card.classList.contains('flipped')) { //classList.contains -- проверка на наличик этого класса у элемента
        return alert('Вы не можете изменить вытянутую из колоды карту! Примите свою судьбу! XD'); 
    } else {
    const randomImage = getRandomImage(); 
    card.style.backgroundImage = `url(${randomImage})`; 
    card.classList.add('flipped');
    checkAllCardsFlipped();
    }
}

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * cardImages.length); 
    return cardImages[randomIndex]; 
}

function addButtonToField() {
    const addButton = document.createElement('button'); 
    addButton.classList.add('myButton');                  
    addButton.textContent = 'Получить трактовку расклада'; 
    document.getElementById('buttonContainer').appendChild(addButton); 
    addButton.addEventListener('click', function() {
        const myInput = prompt('Трактовка расклада'); 
        Result(myInput);                       
    });
}

function checkAllCardsFlipped() {
    if (cardsOnTheField.length === maxCards && cardsOnTheField.every(function(card) {
        return card.classList.contains('flipped');
    })) {
        addButtonToField();  
    }
}

function Result(text) {
    const resultPaper = document.createElement('div');  
    resultPaper.classList.add('resultPaper');          
    resultPaper.textContent = `Трактовка вашего расклада: ${text}`;      
    document.getElementById('layout').appendChild(resultPaper);               
}