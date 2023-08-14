
// ** This code is important to understand DOM


// getElementById
const fruitsContainer = document.getElementById("fruits-container")

console.log(fruitsContainer)

// getElementById.add
console.log(fruitsContainer.classList)

// getElementById.classList.add
fruitsContainer.classList.add("fruits-container-class")

console.log(fruitsContainer.classList);

// getElementById.childNodes
console.log(fruitsContainer.childNodes)


// createElement
const div = document.createElement("div")
div.innerText = "fruit-4"
// getElementById.createElement
fruitsContainer.appendChild(div)


// 1.where to add
const mainContainer = document.getElementById("main-container")
console.log(mainContainer);
//2. what to add
const section = document.createElement("section")
const h1 = document.createElement("h1")
h1.innerText = "My Food List" // innerText

section.appendChild(h1) // appendChild
mainContainer.appendChild(section)

const ul = document.createElement("ul") // createElement

const li1 = document.createElement("li")
li1.innerText = "biriyani"
ul.appendChild(li1)

const li2 = document.createElement("li")
li2.innerText = "borhani"
ul.appendChild(li2)

const li3 = document.createElement("li")
li3.innerText = "khan dani"
ul.appendChild(li3)

section.appendChild(ul)
mainContainer.appendChild(section)



// innerHTML
const sectionDress = document.createElement("section")
sectionDress.innerHTML =
  `
    <h1>My Dress Section</h1>
    <ul>
      <li>tShirt</li>
      <li>Lungi</li>
      <li>Sandle</li>
    </ul>
  `

mainContainer.appendChild(sectionDress)