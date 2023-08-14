console.log("hello from js")
console.log(document);

// todo   getElementsByTagName()

const liCollection = document.getElementsByTagName('li')

for(const li of liCollection){
  console.log(li);
  console.log(li.innerText);
}

const h1Collection = document.getElementsByTagName('h1');
for(const h1 of h1Collection){
  console.log(h1);
  console.log(h1.innerText);
}

//* getElementById returns only one element
const fruits= document.getElementById("fruit-title")
console.log(fruits);


//* getElementsByClassName returns an Array(HTML Collections)
const liItems = document.getElementsByClassName("li-item")

console.log(liItems);
for(const li of liItems){
  console.log(li.innerText);
}


//* querySelectorAll returns NodeList
//* NodeList is static
const liCollection2 = document.querySelectorAll(".fruit-container li");

console.log(liCollection2);
for(const li of liCollection2){
  console.log(li.innerText);
}

// querySelector returns first element



// Dynamic Styling
document.body.style.backgroundColor= "tomato";


// getAttribute
const title = document.getElementById("fruits-li-title")

console.log(title.getAttribute('class'));

// classList
console.log(title.classList);

// add class
title.classList.add("newClass")

// setAttribute
const liItem= document.getElementById("fruit-title")

liItem.setAttribute("title","tootip set")


// innerHTML
const item2 = document.getElementById("fruits-li-title")
console.log(item2.innerHTML)