var a = document.getElementById('main')
    var b = document.getElementById('inpt')
   
var text = document.getElementById('inpt1')

function inp() {
    var newElement = document.createElement("P")
    newElement.className="paragf"
    var value = b.value
    text = document.createTextNode(value)
    newElement.appendChild(text)
    a.appendChild(newElement)

    var editbttn = document.createElement("BUTTON")
    var editbttntext = "Edit"
    editbttn.className="button"
    editbttntext = document.createTextNode(editbttntext)
    editbttn.appendChild(editbttntext)
    editbttn.setAttribute('onclick','editToDo(this)')
    a.appendChild(editbttn)
    b.value = ""
    newElement.appendChild(editbttn)

    var deletbttn = document.createElement('BUTTON')
    deletbttn.className ="button"
    var deletbttntext = document.createTextNode('Delete')
    deletbttn.appendChild(deletbttntext)
    deletbttn.setAttribute('onclick','deleteToDo(this)')
    newElement.appendChild(deletbttn)
}

function deleteToDo(e){
    console.log(e.parentNode)
    e.parentNode.remove()
}

function editToDo(e){
    console.log(e.parentNode.firstChild)
    // e.parentNode.firstChild.nodeValue = 'new Text'
    e.parentNode.firstChild.nodeValue = prompt("Enter new Value",e.parentNode.firstChild.nodeValue)
}

function deleteAll(){
    a.innerHTML = ' '
}



   