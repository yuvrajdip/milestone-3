

// styling dom properties
const sections = document.querySelectorAll("section")

for(const section of sections){
  // console.log(section);
  section.style.border="2px solid orange";
  section.style.borderRadius="10px";
  section.style.marginBottom = "5px";

  section.style.textAlign = "center";

  section.style.backgroundColor="lightGray"
}



// classList 
// add 
// childNodes
const placesContainer = document.getElementById("places-container")
console.log(placesContainer);
placesContainer.classList.add("new-class")
console.log(placesContainer.childNodes);


// innerHTML
const newClass = document.getElementsByClassName("new-class")

newClass[0].innerHTML=
`
  <div class="box">
  </div>
`