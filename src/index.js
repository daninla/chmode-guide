"use strict";

const number = String(
  prompt(
    "Введите число от 0 до 7 включительно(можете вводить в двоичном формате): ",
  ),
).trim();

if (!number) {
  return;
} else if (number.length > 3) {
  parseInt(number, 2);
} else {
  parseInt(number, 8);
}

switch (number) {
  case 0:
    console.log("---");
    break;
  case 1:
    console.log("--x");
    break;
  case 2:
    console.log("-w-");
    break;
  case 3:
    console.log("-wx");
    break;
  case 4:
    console.log("r--");
    break;
  case 5:
    console.log("r-x");
    break;
  case 6:
    console.log("rw-");
    break;
  case 7:
    console.log("rwx");
    break;
  default:
    console.log("Вы ввели некорректное число!");
}
