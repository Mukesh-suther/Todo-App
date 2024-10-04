var inputfield = document.querySelector('.todo_field');
var todolist = document.querySelector('.todo_list');
var emptytodotext = document.querySelector('.emptytodo')
function addtodo(){
    if(inputfield.value !== ""){
        var listitem = document.createElement('li');
    var deletebtn = document.createElement('button');
    var editbtn = document.createElement('button');
    
    var value = document.createTextNode(inputfield.value);
    deletebtn.innerHTML = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#101820;}</style></defs><title/><g data-name="Layer 17" id="Layer_17"><path class="cls-1" d="M24,31H8a3,3,0,0,1-3-3V9A1,1,0,0,1,7,9V28a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V9a1,1,0,0,1,2,0V28A3,3,0,0,1,24,31Z"/><path class="cls-1" d="M28,7H4A1,1,0,0,1,4,5H28a1,1,0,0,1,0,2Z"/><path class="cls-1" d="M20,7a1,1,0,0,1-1-1V3H13V6a1,1,0,0,1-2,0V2a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V6A1,1,0,0,1,20,7Z"/><path class="cls-1" d="M16,26a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0V25A1,1,0,0,1,16,26Z"/><path class="cls-1" d="M21,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,21,24Z"/><path class="cls-1" d="M11,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,11,24Z"/></g></svg>'
    deletebtn.setAttribute('onclick', 'deletetodo(this)');
    deletebtn.setAttribute('title', 'Delete this todo item');
    editbtn.innerHTML = '<svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>'
    editbtn.setAttribute('onclick', 'edittodo(this)');
    editbtn.setAttribute('title', 'Edit this todo item')

    listitem.appendChild(value)
    listitem.appendChild(deletebtn);
    listitem.appendChild(editbtn);
    todolist.appendChild(listitem);
    inputfield.value = '';
    checklistitem()
    }else{
        alert('Please Add todo text');
    }
}

function deletetodo(e){
    e.parentNode.remove();
    checklistitem()
}
function edittodo(e){
    var value = e.parentNode.childNodes[0].nodeValue;
    var propmpt = prompt('Enter your Text Here', value);
    e.parentNode.childNodes[0].nodeValue = propmpt;
    checklistitem()
}
function deletealltodo(){
    todolist.querySelectorAll('li').forEach(function(li) {
        li.remove();
    });
    checklistitem()
}
function checklistitem(){
    var li = todolist.getElementsByTagName("li");
    if (li.length > 0) {
        document.querySelector(".emptytodo").style.display = "none";
    }else{
        document.querySelector(".emptytodo").style.display = "block";
    }
}