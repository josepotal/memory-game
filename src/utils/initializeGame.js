let arrayCards = []
for (var i =1; i<11; i++){
  var cardImg = require(`../assets/figures/${i}.png`)
  const card = {
    id: cardImg,
    found: false
  };
  // Double the figures in the array
  arrayCards.push(card);
  arrayCards.push({ ...card });
}

// Apply the shuffle function
const shuffledCards = shuffle(arrayCards);

export default shuffledCards;


// Helper shuffle function
function shuffle(array) {
  var ctr = array.length, temp, index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr --;
    temp = array[ctr];
    array[ctr] = array[index];
    array[index] = temp;
  }
  return array;
}
