let btnStartOver = document.querySelector("#start-over");

export const checkResult = (boolGreen, circles, ROWS, COLS) => {
  let playerColor = boolGreen ? "green" : "red";
  let arr = new Int8Array(circles.filter((el) => el.classList.contains(playerColor)).map((el) => +el.id.slice(1))).sort();

  // Check horizontal
  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = 0; j < ROWS; j++) {
      for (let k = 0; k < COLS - 3; k++) {
        let bool0 = arr[i] == j * COLS + k;
        let bool1 = arr[i + 1] == j * COLS + k + 1;
        let bool2 = arr[i + 2] == j * COLS + k + 2;
        let bool3 = arr[i + 3] == j * COLS + k + 3;
        if (bool0 && bool1 && bool2 && bool3) {
          highlightCircles([`c${arr[i]}`, `c${arr[i + 1]}`, `c${arr[i + 2]}`, `c${arr[i + 3]}`]);

          // setTimeout(() => alert("you won!"), 100);
          return true;
        }
      }
    }
  }

  // Check vertical
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS - 3; j++) {
      let chip0 = i + j * COLS;
      let chip1 = i + (j + 1) * COLS;
      let chip2 = i + (j + 2) * COLS;
      let chip3 = i + (j + 3) * COLS;
      let bool0 = arr.includes(chip0);
      let bool1 = arr.includes(chip1);
      let bool2 = arr.includes(chip2);
      let bool3 = arr.includes(chip3);
      if (bool0 && bool1 && bool2 && bool3) {
        highlightCircles([`c${chip0}`, `c${chip1}`, `c${chip2}`, `c${chip3}`]);
        return true;
      }
    }
  }
  // // Check vertical
  // for (let i = 0; i < arr.length - 3; i++) {
  //   for (let j = 0; j < COLS; j++) {
  //     for (let k = 0; k < ROWS - 3; k++) {
  //       let bool0 = arr[i] == j + k * COLS;
  //       let bool1 = arr[i + 1] == j + (k + 1) * COLS;
  //       let bool2 = arr[i + 2] == j + (k + 2) * COLS;
  //       let bool3 = arr[i + 3] == j + (k + 3) * COLS;
  //       if (bool0 && bool1 && bool2 && bool3) {
  //         highlightCircles([`c${arr[i]}`, `c${arr[i + 1]}`, `c${arr[i + 2]}`, `c${arr[i + 3]}`]);

  //         // setTimeout(() => alert("you won!"), 100);
  //         return true;
  //       }
  //     }
  //   }
  // }

  // Check upward diagonal
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS - 3; j++) {
      let chip0 = i * COLS + j;
      let chip1 = i * COLS + j + 1 * (COLS + 1);
      let chip2 = i * COLS + j + 2 * (COLS + 1);
      let chip3 = i * COLS + j + 3 * (COLS + 1);
      let bool0 = arr.includes(chip0);
      let bool1 = arr.includes(chip1);
      let bool2 = arr.includes(chip2);
      let bool3 = arr.includes(chip3);

      if (bool0 && bool1 && bool2 && bool3) {
        highlightCircles([`c${chip0}`, `c${chip1}`, `c${chip2}`, `c${chip3}`]);
        // setTimeout(() => alert("you won!"), 100);
        return true;
      }
    }
  }

  // Check downward diagonal
  for (let i = 0; i < ROWS; i++) {
    for (let j = COLS - 1; j > COLS - 5; j--) {
      let chip0 = i * COLS + j;
      let chip1 = i * COLS + j + 1 * (COLS - 1);
      let chip2 = i * COLS + j + 2 * (COLS - 1);
      let chip3 = i * COLS + j + 3 * (COLS - 1);
      let bool0 = arr.includes(chip0);
      let bool1 = arr.includes(chip1);
      let bool2 = arr.includes(chip2);
      let bool3 = arr.includes(chip3);
      if (bool0 && bool1 && bool2 && bool3) {
        highlightCircles([`c${chip0}`, `c${chip1}`, `c${chip2}`, `c${chip3}`]);
        return true;
      }
    }
  }
};

const highlightCircles = (ids) => {
  ids.forEach((el) => {
    document.querySelector(`#${el}`).classList.add("win");
  });
};
