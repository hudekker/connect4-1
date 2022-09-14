import { checkResult } from "./update.js";
const COLS = 7;
const ROWS = 6;
let circles = [...document.querySelectorAll(".circle")];
let boolGreen = true;
let btnStartOver = document.querySelector("#start-over");
let msg = document.querySelector("#msg");
let boolWin = false;

msg.classList.remove("hidden");
msg.innerText = boolGreen ? MSG1 : MSG2;
boolGreen ? msg.classList.remove("p2") : msg.classList.add("p2");

// Process inputs
circles.forEach((el) => {
  let num = +el.id.slice(1);
  // el.innerText = num;

  if (num >= 35) {
    el.addEventListener("click", (e) => {
      if (boolWin) return null;

      let col = getRowCol(num).col;
      let colArray = getColArray(col);
      let boolEntered = false;

      for (let i = 0; i < COLS - 1; i++) {
        if (boolEntered) break;
        let el = colArray[i].classList;

        if (el.contains("red") || el.contains("green")) {
          continue;
        } else {
          boolEntered = true;
          boolGreen ? el.add("green") : el.add("red");
        }
      }

      boolWin = checkResult(boolGreen, circles, ROWS, COLS);
      if (boolWin) {
        msg.classList.add("hidden");
        msg.classList.remove("p2");
        btnStartOver.classList.remove("hidden");
        btnStartOver.innerText = boolGreen ? MSG3 : MSG4;
      } else {
        boolGreen = !boolGreen;
        msg.innerText = boolGreen ? MSG1 : MSG2;
        boolGreen ? msg.classList.remove("p2") : msg.classList.add("p2");
      }
    });
  }
});

const getRowCol = (i) => {
  return { row: Math.floor(i / COLS), col: i % COLS };
};

const getIndex = (row, col) => {
  return row * COLS + col;
};

const getColArray = (col) => {
  let arr = circles.filter((x) => getRowCol(x.id.slice(1)).col === col);
  return arr.reverse();
};

// Start Over, Play Again
btnStartOver.addEventListener("click", (evt) => {
  boolWin = false;
  btnStartOver.classList.add("hidden");
  document.querySelector("#msg").classList.remove("hidden");
  document.querySelector("#msg").innerText = MSG1;

  circles.forEach((el) => {
    el.classList.remove("red");
    el.classList.remove("green");
    el.classList.remove("win");
  });

  boolGreen = true;
});
// const checkResult = () => {
//   let playerColor = boolGreen ? "green" : "red";
//   let arr = new Int8Array(circles.filter((el) => el.classList.contains(playerColor)).map((el) => +el.id.slice(1))).sort();

//   // Check horizontal
//   for (let i = 0; i < arr.length - 3; i++) {
//     for (let j = 0; j < ROWS; j++) {
//       for (let k = 0; k < COLS - 3; k++) {
//         let bool0 = arr[i] == j * COLS + k;
//         let bool1 = arr[i + 1] == j * COLS + k + 1;
//         let bool2 = arr[i + 2] == j * COLS + k + 2;
//         let bool3 = arr[i + 3] == j * COLS + k + 3;
//         if (bool0 && bool1 && bool2 && bool3) {
//           alert("you won!");
//         }
//       }
//     }
//   }

//   // Check vertical
//   for (let i = 0; i < arr.length - 3; i++) {
//     for (let j = 0; j < COLS; j++) {
//       for (let k = 0; k < ROWS - 3; k++) {
//         let bool0 = arr[i] == j + k * COLS;
//         let bool1 = arr[i + 1] == j + (k + 1) * COLS;
//         let bool2 = arr[i + 2] == j + (k + 2) * COLS;
//         let bool3 = arr[i + 3] == j + (k + 3) * COLS;
//         if (bool0 && bool1 && bool2 && bool3) {
//           alert("you won!");
//         }
//       }
//     }
//   }

//   // Check upward diagonal
//   for (let i = 0; i < ROWS; i++) {
//     for (let j = 0; j < COLS - 3; j++) {
//       let bool0 = arr.includes(i * COLS + j + 0 * (COLS + 1));
//       let bool1 = arr.includes(i * COLS + j + 1 * (COLS + 1));
//       let bool2 = arr.includes(i * COLS + j + 2 * (COLS + 1));
//       let bool3 = arr.includes(i * COLS + j + 3 * (COLS + 1));
//       if (bool0 && bool1 && bool2 && bool3) {
//         alert("you won!");
//       }
//     }
//   }

//   // Check downward diagonal
//   for (let i = 0; i < ROWS; i++) {
//     for (let j = COLS - 1; j > COLS - 5; j--) {
//       let bool0 = arr.includes(i * COLS + j + 0 * (COLS - 1));
//       let bool1 = arr.includes(i * COLS + j + 1 * (COLS - 1));
//       let bool2 = arr.includes(i * COLS + j + 2 * (COLS - 1));
//       let bool3 = arr.includes(i * COLS + j + 3 * (COLS - 1));
//       if (bool0 && bool1 && bool2 && bool3) {
//         alert("you won!");
//       }
//     }
//   }

//   console.log(arr);
// };
