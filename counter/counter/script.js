let countervalue=0; 
 
const counterElement=document.querySelector("#countervalue");
const decreasebtn=document.querySelector("#decreasebtn");
const increasebtn=document.querySelector("#increasebtn");
const resetbtn=document.querySelector("#resetbtn");

decreasebtn.addEventListener("click",()=>{
countervalue-=1;
counterElement.innerText=countervalue;
changebuttonborder(decreasebtn);

 });

increasebtn.addEventListener("click",()=>{
countervalue+=1;
counterElement.innerText=countervalue;
changebuttonborder(increasebtn);
 });

resetbtn.addEventListener("click",()=>{
countervalue=0;
counterElement.innerText=countervalue;
changebuttonborder(resetbtn);
});

function changebuttonborder(button){
    button.style.border='2px solid red';
 }; 




