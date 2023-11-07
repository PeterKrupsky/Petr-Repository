const node_for_click = document.getElementById("for_click")

function find_edit(){
    const item  = document.getElementsByTagName('p')[0]
    console.log(item.innerText)
    item.innerText = 'Поменять язык'
    document.getElementsByTagName('p')[1].innerHTML='GU MVD PO GORODU MOSKVE'
    document.getElementsByTagName('p')[4].innerHTML='Krupsky'
    document.getElementsByTagName('p')[5].innerHTML='Petr'
    document.getElementsByTagName('p')[6].innerHTML='Anatolievich'
    document.getElementsByTagName('p')[7].innerHTML='male'
    document.getElementsByTagName('p')[9].innerHTML='Moscow'
}
node_for_click.addEventListener("click",find_edit)