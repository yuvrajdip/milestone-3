

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

