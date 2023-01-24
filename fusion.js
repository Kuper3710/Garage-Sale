const menuEmail = document.querySelector(".navbar-email");
const dskMenu = document.querySelector(".dsk-menu");
const imgMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCard = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
imgMenu.addEventListener("click", toggleMobileMenu);
shoppingCard.addEventListener("click", toggleProdcutDetail);


function toggleDesktopMenu(){
    const isProductDetail = productDetail.classList.contains("inactive");

    if (!isProductDetail){
        productDetail.classList.add("inactive");
        dskMenu.classList.toggle("inactive");
    } else{
        dskMenu.classList.toggle("inactive");
    }
}

function toggleMobileMenu(){
    const isProductDetail = productDetail.classList.contains("inactive");

    if(isProductDetail){
        mobileMenu.classList.toggle("inactive");
    } else if(!isProductDetail){
        productDetail.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }
}

function toggleProdcutDetail(){
    const isMobileMenu = mobileMenu.classList.contains("inactive");
    const isDskMenu = dskMenu.classList.contains("inactive");

    if(isDskMenu){
        if(isMobileMenu){
            productDetail.classList.toggle("inactive");
        } else if(!isMobileMenu){
                mobileMenu.classList.toggle("inactive");
                productDetail.classList.toggle("inactive");
            } 
        else{
            productDetail.classList.toggle("inactive");
        }
        
    } else if(!isDskMenu){
        dskMenu.classList.add("inactive");
        productDetail.classList.toggle("inactive");
    } 
}

// const isMobileMenu = mobileMenu.classList.contains("inactive");

// if(isMobileMenu){
//     productDetail.classList.toggle("inactive");
// } else if(!isMobileMenu){
//     mobileMenu.classList.toggle("inactive");
//     productDetail.classList.toggle("inactive");
// } 