let gameBox = document.querySelector(".game-box");
let resetBtn = document.querySelector(".button");
let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let head = document.querySelector(".head");
let para = document.querySelector(".para");
let win = document.querySelector(".win");
let start = document.querySelector(".start");

// console.log(gameBox);
// console.log(boxes); ye 9 element ki nodelist hai isiliye ispe forEach lagega...
//gameBox array hai but sirf ek element wala...
// boxes 9 element wala array yani nodelist hai isiliye boxes pe foreach lagega naaki gamebox pe...
//smallBox temporary variable hai jo boxes ke nodelist  ke anadr jitne bhi element hai unke liye bnaya gya hai...
//forEach boxes ke anadr ke sbhi element pe check karega or click hone pe print karega...
//eventlisterner ek element pe laggega lekin or forEach kisi array pe lagta hai jo ki yaha boxes hai...
let trueX = true;

boxes.forEach((smallBox) => {
  smallBox.addEventListener("click", () => {
    console.log("CLICKED THE BOX");

    if (smallBox.innerText === "") {
      if (trueX) {
        //trueX===true ya trueX dono ka matlab wahi hai
        smallBox.innerText = "X";
        trueX = false;
      } else {
        smallBox.innerText = "O";
        trueX = true;
      }
    }
    checkWinner();
    // disabledBoxes();
  });
});

let winnerCon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let showWinner = (winner) => {
  para.innerText = `WINNER IS - "${winner}" 🎉`;
  win.classList.remove("hide");
};

const checkWinner = () => {
  winnerCon.forEach((el) => {
    let el0 = boxes[el[0]].innerText;
    let el1 = boxes[el[1]].innerText;
    let el2 = boxes[el[2]].innerText;

    if (el0 !== "" && el0 === el1 && el1 == el2) {
      console.log("WINNER IS ", el0);
      showWinner(el0);
      disabledBoxes();
    }
  });
};

let disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};

let resetGame = () => {
  trueX = true;
  enableBoxes();
  boxes.forEach((box) => {
    box.innerText = "";
  });
  win.classList.add("hide");
};

start.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

//made by devesh tiwari 2/11/1015