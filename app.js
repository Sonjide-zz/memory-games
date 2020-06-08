document.addEventListener("DOMContentLoaded", () => {
  //card options
  // make an array

  const cardArray = [
    {
      name: "blank",
      img: "Images/blank.png",
    },
    {
      name: "fries",
      img: "Images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "Images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "Images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "Images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "Images/milkshake.png",
    },
    {
      name: "pizza",
      img: "Images/pizza.png",
    },
  ];
});

const grid = document.querySelector(".grid");

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    //create an image element
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    //card.addEventListener('click', flipcard)
    grid.appendChild(card);
  }
}
//call/invoking the function
createBoard();
