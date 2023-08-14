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
