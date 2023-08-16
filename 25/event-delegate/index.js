
// remove list item

document.getElementById('items').addEventListener("click",function(e){  

  // the below line is really important
  e.target.parentNode.removeChild(e.target)
  // kono kichu te click kora mane oita e nije ekta event
})

document.getElementById('add-items').addEventListener('click',()=>{
  let li=document.createElement('li')
  li.innerText='new-item'

  li.classList.add('item')

  document.getElementById('items').appendChild(li)
})