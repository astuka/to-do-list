//storage
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items',JSON.stringify(itemsArray))

//click close button to hide current list item
var close = document.getElementsByClassName("close");

//find list items in localStorage
function openStorage() {
    for (i=0; i < itemsArray.length; i++){
        var li = document.createElement("li");
        var inputValue = itemsArray[i];
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("List").appendChild(li);
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        //span.onclick = delTask();
        span.appendChild(txt);
        li.appendChild(span);
    }

    for (i=0;i < close.length; i++) {
         close[i].onclick = function() {
             var div = this.parentElement;
             div.style.display = "none";
             itemsArray.splice(i-1,1);
             localStorage.setItem('items',JSON.stringify(itemsArray));
         }
     }
}

// create close button, assign it to each list element
var myNodelist = document.getElementsByTagName("li");
var i = 0;
for (i = 0; i < myNodelist.length; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// function delTask(div){
//     //var div = this.parentElement;
//     div.style.display = "none";
// }


//create new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    itemsArray.push(inputValue);
    localStorage.setItem('items',JSON.stringify(itemsArray));
    li.appendChild(t);
    if (inputValue === ''){
        alert("You must write something!");
    } else {
        document.getElementById("List").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    //span.onclick = delTask()
    span.appendChild(txt);
    li.appendChild(span);

    for (i=0;i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            itemsArray.splice(i,1);
            localStorage.setItem('items',JSON.stringify(itemsArray));
        }
    }
}


// document.querySelector("#myInput").addEventListener("keyup", event => {
//     if(event.key == "Enter"){
//         document.querySelector(".addBtn").click();
//     }
//         event.preventDefault();
// })