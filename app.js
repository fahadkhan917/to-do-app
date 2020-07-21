
var list=document.getElementById("list");
function todo(){
    
var val=document.getElementById("val");
var l=document.createElement('li');
var text=document.createTextNode(val.value);
l.appendChild(text);
list.append(l);
list.setAttribute("class","li");
list.setAttribute("class",'txt');


val.value='';

//deletebtn
var delebtn=document.createElement('button');
var deltext=document.createTextNode('delete');

delebtn.appendChild(deltext);
delebtn.setAttribute("onclick","deletebtn(this)")
delebtn.setAttribute("class","btn btn-danger");

l.appendChild(delebtn);

//edit
var editbtn=document.createElement('button');
var edittext=document.createTextNode('Edit');
editbtn.appendChild(edittext);
editbtn.setAttribute("onclick","ed(this)")
editbtn.setAttribute("class","btn btn-success");

l.appendChild(editbtn);






}

function del(){


    list.innerHTML='';
    



}

function deletebtn(e){
e.parentNode.remove();

}


function ed(e){
    var val=e.parentNode.firstChild.nodeValue;
    var edi=prompt("enter the change",val);
    e.parentNode.firstChild.nodeValue=edi;
    }