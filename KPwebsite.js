function insert_img(){
const img = document.createElement('img');
img.src = '/Users/macbookpeter/Desktop/Вшэ доки/Основы Web/на розовом.jpg';
img.alt = 'Poizon Crew Logo';
document.getElementsByTagName("div")[0].appendChild(img);
img.height = '100';
img.width='100';
}
const node_insert_img = document.getElementById("insert_img")
node_insert_img.addEventListener("click",insert_img) 







// Функция для проверки типа числа
function checkNumber(num) {
    if (num > 0) {
      return "Положительное";
    } else if (num < 0) {
      return "Отрицательное";
    } else {
      return "Ноль";
    }
  }
  
  // Главная функция игры
  function game() {
    // Генерация вещественного числа от -100 до 100
    var number = Math.random() * 200 - 100;
  
    // Отображение вещественного числа
    console.log("Вещественное число:", number);
  
    // Определение типа числа с помощью функции checkNumber
    var result = checkNumber(number);
  
    // Вывод результата
    console.log("Тип числа:", result);
  }
  
  // Запуск игры
  game();