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
let focusEl = document.querySelectorAll(".focus-product")

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

function Counter(incrementBtn, decrementBtn, quantityValue, minCount = 1, maxCount = 10){
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        quantityValue,
    }
    this.toggelButtonState = function(){
        let count = this.domRefs.quantityValue.value;
        this.domRefs.incrementBtn.disabled = count >= maxCount;
        if(this.domRefs.incrementBtn.disabled){
           this.domRefs.incrementBtn.classList.add("disabled"); 
        } else{
            this.domRefs.incrementBtn.classList.remove("disabled");
        }
        this.domRefs.decrementBtn.disabled = count <= minCount;
        if(this.domRefs.decrementBtn.disabled){
            this.domRefs.decrementBtn.classList.add("disabled"); 
         } else{
             this.domRefs.decrementBtn.classList.remove("disabled");
         }
    }

    this.increment = function(){
        let currentCount = +this.domRefs.quantityValue.value;
        let nextCount = currentCount + 1;
        this.domRefs.quantityValue.value = nextCount;
        this.toggelButtonState();
    }
    this.decrement = function(){
        let currentCount = +this.domRefs.quantityValue.value;
        let nextCount = currentCount -1;
        this.domRefs.quantityValue.value = nextCount;
        this.toggelButtonState();
    }

    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this))
    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this))

    this.toggelButtonState();
}
quantityValue.forEach((item, i) => {
    new Counter(incrementBtn[i], decrementBtn[i], quantityValue[i]);
})

//slider

$(".slider-block").slick({
    dots:true,
});

//select

$('#select').selectize({
    options: [
        {value: "name", name: "Sort by name" },
        {value: "price", name: "Sort by price" },
        {value: "popolarity", name: "Sort by popolarity" }
    ],
     labelField: 'name',
});