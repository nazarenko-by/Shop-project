// add to card 
let productsCountEl = document.querySelector("#products-count");
let addToCardButtons = document.querySelectorAll(".add-to-card")

for( let i = 0; i < addToCardButtons.length; i++){
    addToCardButtons[i].addEventListener("click", function(){
        productsCountEl.textContent =  +productsCountEl.textContent + 1;
    })
}

//modal
let modal = document.querySelector(".modal")
let moreDetailsClass = document.querySelectorAll(".more-details")
let closeBtn = document.querySelector(".btn-close")

moreDetailsClass.forEach((btn)=>{
    btn.addEventListener("click", function(){
       modal.classList.add("show")
       modal.classList.remove("hide")
    })
} )

function closeModal(){
    modal.classList.add("hide")
    modal.classList.remove("show")
}

closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", function(e){
    if (e.target == modal){
        closeModal();
    }
})