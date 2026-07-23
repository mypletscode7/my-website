// MOBILE MENU

const menu = document.getElementById("menu");
const nav = document.getElementById("navLinks");


menu.onclick = () => {

    nav.style.display =
    nav.style.display === "flex"
    ? "none"
    : "flex";

};




// COUNTER ANIMATION


const counters =
document.querySelectorAll(".counter");


counters.forEach(counter=>{


let target =
Number(counter.dataset.target);


let count=0;


let speed =
target / 100;



function update(){

count += speed;


if(count < target){

counter.innerText =
Math.floor(count);

requestAnimationFrame(update);

}

else{

counter.innerText =
target + "+";

}


}


update();


});
