let imgRuble = document.querySelector(".imgRuble");
let imgTails = document.querySelector(".imgTails");
let headsFell = document.querySelector(".throw");
let eagles = document.querySelector(".eagle");
let tails = document.querySelector(".tails");

let throws = 0; //броски
let eagle = 0; // орел
let tail = 0; //решка

function getAnswer() {
  throws++; //количество бросков
  let randomNumber1 = Math.floor(Math.random() * 2); // Генерация случайного числа 0 или 1

  if (randomNumber1 == 0) {// рандомно выбирает от 0 до 1. если условие равно 0 то выведет следующее
    tail++;//решка 
    imgRuble.src = "./img/ruble.png"; //выведет картинку рубля
    headsFell.textContent = `Бросков: ${throws} `; //подсчет бросков
    tails.textContent = `Решек: ${tail}`;
  }
  
  else if (randomNumber1 == 1) { //если равен 0 то выведит следующее
    eagle++; //вывод выпада орлов
    imgRuble.src = "./img/tails.png"; //картинка рубля. так как число 1 привязанно в этой картинке
    headsFell.textContent = `Бросков: ${throws} `; //подсчет бросков
    eagles.textContent = `Орлов: ${eagle} `; //сама надпись орел и подсчет орлов
  }
}

imgRuble.addEventListener("click", getAnswer);
