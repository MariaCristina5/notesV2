const noteInput = document.querySelector('.note');
const noteCointainerEl = document.querySelector('.note-container');
const closeBtn = document.querySelector('.close-btn'); 

// show/hide note controler container
noteInput.addEventListener('click', ()=>{
    hideFunction();
    showFunction();
})
function hideFunction() {
        let x = document.querySelector(".note");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }
function showFunction(){
    let y = document.querySelector('.note-container');
    if(y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block"
    }
}

closeBtn.addEventListener('click', ()=>{
    hideFunction();
    showFunction();
})
