//storage
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items',JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

// create close button, assign it to each list element
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//click close button to hide current list item
var close = document.getElementsByClassName("close");
var i;
for (i=0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//add checked symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

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
        }
    }
}

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
        }
    }
}



// var lit = document.createElement("li");

// data.forEach(item => {
//     lit.appendChild(item);
// })
// document.getElementById("List").appendChild(lit);


// to remove an item from localStorage: localStorage.removeItem('myCat');