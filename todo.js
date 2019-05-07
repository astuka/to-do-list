
const form = document.querySelector('form');

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

data.forEach(item => {
    var li = document.createElement("li");
    li.appendChild(item);
})

//currently on the data.forEach part of the guide


// function save() {
//   localStorage.setItem("html", document.body.innerHTML)
// }

// function set() {
//   let content = localStorage.getItem("html")
//   if(content) {
//     document.body.innerHTML = content
//   }
// }

// to remove an item from localStorage: localStorage.removeItem('myCat');