console.log("hello from js")
console.log(document);

// todo getElementsByTagName()
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