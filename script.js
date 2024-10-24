let cardsOnTheField = []
const maxCards = 4
const cardImages = [
    'assets/theFool.JPG',
    'assets/theMagician.JPG',
    'assets/thePriestess.JPG',
    'assets/theEmpress.JPG',
    'assets/theEmperor.JPG',
]

document.getElementById('addCard').addEventListener('click', addCardToField)

function addCardToField() {
    if(cardsOnTheField.length < maxCards) {
        const card = document.createElement('div')
        card.classList.add('card');
        document.getElementById('cardsField').appendChild(card);
        cardsOnTheField.push(card);
        card.addEventListener('click', flipCard)
        
    }
}

function flipCard {

}

