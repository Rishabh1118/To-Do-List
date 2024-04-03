var inputBox=document.getElementById("input");
var list=document.getElementById("list");
 
function addTask(){
    if(input.value==""){
        alert("plz write Something!")
    }
    else{
        var li=document.createElement('li');
        li.innerHTML=input.value;
        list.appendChild(li);
        var imgs=document.createElement("img");
        imgs.id="image";
        console.log(imgs);
        imgs.src="cross.png"
        li.appendChild(imgs);
    }
    input.value="";
    saveData()
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        saveData()
    }
});
function saveData(){
    localStorage.setItem("task",list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("task");
}
showTask();