//storage
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items',JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

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

//click close button to hide current list item
var close = document.getElementsByClassName("close");

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

//find list items in localStorage
function openStorage() {
    for (i=0; i < data.length; i++){
        var li = document.createElement("li");
        var inputValue = data[i];
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("List").appendChild(li);
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
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

// document.querySelector("#myInput").addEventListener("keyup", event => {
//     if(event.key == "Enter"){
//         document.querySelector(".addBtn").click();
//     }
//         event.preventDefault();
// })

// to remove an item from localStorage: localStorage.removeItem('myCat');