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
        like.classList.toggle("like-on");  
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

//change product count
let decrementBtn = document.querySelectorAll(".decrement-button");
let incrementBtn = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quantity input");

let minCount = 1;
let maxCount = 10;
function toggelButtonState(count, i){
    incrementBtn[i].disabled = count >= maxCount;
    decrementBtn[i].disabled = count <= minCount;
}

quantityValue.forEach((item, i) =>{
    let count = item.value;
    toggelButtonState(count, i)
})

incrementBtn.forEach((item, i) =>{
    item.addEventListener("click",function(){
    let currentCount = +quantityValue[i].value;
    let nextCount = currentCount + 1;
    quantityValue[i].value = nextCount;
    toggelButtonState(nextCount,i);
})
} )

decrementBtn.forEach((item, i) =>{
    item.addEventListener("click",function(){
    let currentCount = +quantityValue[i].value;
    let prevCount = currentCount - 1;
    quantityValue[i].value = prevCount;
    toggelButtonState(prevCount,i);
}) 
})



// console.log(decrementBtn, incrementBtn, quantityValue)