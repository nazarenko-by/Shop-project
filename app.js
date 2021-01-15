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
        openModal();
    })
} )

function openModal(){
    modal.classList.add("show")
       modal.classList.remove("hide")
}

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

//like
let likeEl = document.querySelectorAll(".like")

likeEl.forEach((like)=>{
    like.addEventListener("click", function(){
        if(like.classList.length == 1){
            like.classList.add("like-on");
        } else{
            like.classList.remove("like-on");
        }    
    })
})

//focus
let focusEl = document.querySelectorAll(".focus")

focusEl.forEach((focus)=>{
    focus.addEventListener("click", function(){
        if(focus.classList.length == 1){
            focus.classList.add("focus-on");
        } else{
            focus.classList.remove("focus-on");
        }    
    })
})