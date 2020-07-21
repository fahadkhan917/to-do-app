
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
delebtn.setAttribute("onclick","deletebtn(this)")


l.appendChild(delebtn);

//edit
var editbtn=document.createElement('button');
var edittext=document.createTextNode('Edit button');
editbtn.appendChild(edittext);
editbtn.setAttribute("onclick","ed(this)")


l.appendChild(editbtn);






}

function del(){


    list.remove();
    



}

function deletebtn(e){
e.parentNode.remove();

}


function ed(e){
    
    //  var edi=prompt("enter the change");
    console.log(list.childNodes[1].childNodes[0]);
    console.log(e.parentNode.first);
    
    }