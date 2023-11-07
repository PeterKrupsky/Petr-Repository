function insert_img(){
const img = document.createElement('img');
img.src = '/Users/macbookpeter/Desktop/Вшэ доки/Основы Web/маклого.jpg';
img.alt = 'Poizon Crew Logo';
document.getElementsByTagName("div")[0].appendChild(img);
img.height = '50';
img.width='50';
}
const node_insert_img = document.getElementById("insert_img")
node_insert_img.addEventListener("click",insert_img) 