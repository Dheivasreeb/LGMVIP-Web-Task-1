const inputBox=document.getElementById("input-box");
const lstcont=document.getElementById("lst");
function add()
{
    if(inputBox.value== '')
    {
        alert("Please Enter Some Task");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        lst.appendChild(li); 
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

lst.addEventListener("click",function(e){
    if(e.target.tagName=="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("data", lst.innerHTML);

}

function showTodolist()
{
    lst.innerHTML=localStorage.getItem("data");
    
}
showTodolist();