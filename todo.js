//storage
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items',JSON.stringify(itemsArray))

//global variables
var close = document.getElementsByClassName("close");
var myList = document.getElementsByTagName("li");

//find list items in localStorage
function openStorage() {
    for (i=0; i < itemsArray.length; i++){
        var li = document.createElement("li");
        var inputValue = itemsArray[i];
        // var strValue = String(inputValue);
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("List").appendChild(li);
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.setAttribute('onclick',"delTask('" + inputValue+ "')");
        span.appendChild(txt);
        li.appendChild(span);
    }
}

//create new list item when clicking on the "Add" button
function newTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    // var strValue = String(inputValue);
    if (inputValue === ''){
        alert("You must write something!");
    } else {
        var t = document.createTextNode(inputValue);
        itemsArray.push(inputValue);
        localStorage.setItem('items',JSON.stringify(itemsArray));
        li.appendChild(t);
        document.getElementById("List").appendChild(li);
    }
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.setAttribute('onclick',"delTask('" + inputValue + "')");
    span.appendChild(txt);
    li.appendChild(span);
    document.getElementById("myInput").value = "";
}

//delete a task
function delTask(e){
    for (i=0; i < myList.length;i++){
        if (myList[i].textContent == e + "×"){
            itemsArray.splice(i,1);
            localStorage.setItem('items',JSON.stringify(itemsArray));
            myList[i].style.display = "none";
        }
    }
}



// document.querySelector("#myInput").addEventListener("keyup", event => {
//     if(event.key == "Enter"){
//         document.querySelector(".addBtn").click();
//     }
//         event.preventDefault();
// })