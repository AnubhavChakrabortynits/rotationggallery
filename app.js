const imgcont=document.querySelector(".container");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
let x=0;
prev.addEventListener("click",()=>{
x=x+45;
updataegallery()});

next.addEventListener("click",()=>{
x=x-45;
updataegallery()});
function updataegallery(){
    imgcont.style.transform=`perspective(1000px) rotateY(${x}deg)`
}
