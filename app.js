
var list=document.getElementById("list");
function todo(){
var val=document.getElementById("val");

var l=document.createElement('li');
var text=document.createTextNode(val.value);
l.appendChild(text);
list.append(l);

val.value='';


}

function del(){


    list.remove();
    



}