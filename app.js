
var list=document.getElementById("list");
function todo(){
    
var val=document.getElementById("val");
var l=document.createElement('li');
var text=document.createTextNode(val.value);
l.appendChild(text);
list.append(l);

val.value='';

//deletebtn
var delebtn=document.createElement('button');
var deltext=document.createTextNode('delete button');
delebtn.appendChild(deltext);

l.appendChild(delebtn);



list.append(l);



}

function del(){


    list.remove();
    



}

