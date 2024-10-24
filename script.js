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
    const randomImage = getRandomImage(); 
    card.style.backgroundImage = `url(${randomImage})`; 
    card.classList.add('flipped');
}

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * cardImages.length); 
    return cardImages[randomIndex]; 
}

function addButtonToField() {
    const addButton = document.createElement('button')
        addButton.classList.add('button');
        document.getElementById('cardsField').appendChild(addButton);
}


