const containerDiv = document.querySelector(".container");
const btnClear = document.querySelector(".btn");
const btnSize = document.querySelector(".btnSize")
const slider =document.querySelector(".slider")
btnSize.addEventListener("click", changeSize)
const tab = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

for(let i = 1; i<=256; i++){
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = "&nbsp";
    containerDiv.appendChild(box);
    colorBoxes();
 }
function colorFull(){
    let color = "#";
    for(let i = 0; i<6;i++){
        color += tab[Math.floor(Math.random()*tab.length)];
    }
    return color;
}
function colorBoxes(){
    let boxes = document.querySelectorAll(".box")
        boxes.forEach((div)=>{
            div.addEventListener("mouseout",()=>{
                div.style.background= colorFull();
            })
    })
}

function changeSize(){
    let size =parseInt(prompt("Write size from 1-25"));
    if(size >1 && size <=25){    
        let boxes = document.querySelectorAll(".box");
        for(let i = 0; i<boxes.length;i++){
            boxes[i].remove();
        }
        for(let i = 1; i<=size*size; i++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = "&nbsp";
            containerDiv.appendChild(box);
        }
        console.log(size)
        
        containerDiv.setAttribute(`style`, `grid-template-columns: repeat(${size}, 1fr);`);
        //  containerDiv.setAttribute(`style`, `grid-template-rows: repeat(${size}, 1fr);`);
        colorBoxes();
    }
    else
    {
        changeSize();
    }
}
btnClear.addEventListener("click", function(){
    let boxes = document.querySelectorAll(".box");
    for(let i = 0; i<boxes.length;i++){
        boxes[i].style.background = "#fff";
    }
})
