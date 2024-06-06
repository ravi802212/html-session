const itemList= document.getElementById("itemList");
const addItemBtn= document.getElementById("addItemBtn");

let i = 5;
 
addItemBtn.addEventListener("click",()=>{
    const newItem =document.createElement("li");
    newItem.textContent=`newItem ${i++}`;

    itemList.appendChild(newItem);
})

