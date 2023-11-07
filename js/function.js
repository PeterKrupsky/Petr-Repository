const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){
    const item  = document.getElementsByTagName('p')[0]
    console.log(item.innerText)
    item.innerText = 'новое Имя Ivan'

    document.getElementsByTagName('p')[1].innerText='новый год 2023'

    document.getElementsByTagName('p')[2].innerHTML='новая фио Ivanov'

}
node_for_click_all.addEventListener("click",find_edit_all)


const node_for_click_name = document.getElementById("for_click_name")
function find_edit_name(){
      document.getElementsByTagName('p')[0].innerText='изменить имя на Иван '
}
node_for_click_name.addEventListener("click",find_edit_name)