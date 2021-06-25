var listItem = document.getElementById("list");



function addbtn() {
    var inpt = document.getElementById("inpt").value;

    var list = document.createElement("li")
    var listValue = document.createTextNode(inpt)
    list.appendChild(listValue)
    // console.log(list)
    listItem.appendChild(list)
    
    
    var btn = document.createElement("button")
    var btnValue = document.createTextNode("remove")
    btn.setAttribute("onclick", "reomve_btn(this)")
    btn.appendChild(btnValue)
    
    var edit = document.createElement("button")
    var edit_value = document.createTextNode("Edit")
    edit.appendChild(edit_value)
    edit.setAttribute("onclick", "edition(this)")
    
    
    list.appendChild(btn)
    list.appendChild(edit)
    
    document.getElementById("inpt").value = ""
    // console.log(btn)
}
function reomve_btn(a) {
    // console.log(a.parentNode)
    a.parentNode.remove()
}
function edition(a) {
    a.parentNode.firstChild.nodeValue;
    // console.log(    a.parentNode.firstChild.nodeValue    )
    var pro = prompt("edit value")
    a.parentNode.firstChild.nodeValue = pro;

}
function delete_all() {

    listItem.innerHTML = ""; 
}
