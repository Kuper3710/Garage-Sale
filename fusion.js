const menuEmail = document.querySelector(".navbar-email");
const dskMenu = document.querySelector(".dsk-menu");
const imgMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCard = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".card-container");
const detailView = document.querySelector(".detail-view");
const detailClose = document.querySelector(".product-detail-close");
const numberPurchases = document.querySelector(".purchases");
let numero = 0;

menuEmail.addEventListener("click", toggleDesktopMenu);
imgMenu.addEventListener("click", toggleMobileMenu);
shoppingCard.addEventListener("click", toggleProdcutDetail);
detailClose.addEventListener("click", closeProductDetail);

function toggleDesktopMenu(){
    const isProductDetail = productDetail.classList.contains("inactive");
    const isDetailView = detailView.classList.contains("inactive");

    if(isProductDetail && isDetailView){
        dskMenu.classList.toggle("inactive");
    } else if(!isProductDetail){
        productDetail.classList.add("inactive");
        dskMenu.classList.toggle("inactive");
    } else if(!isDetailView){
        detailView.classList.add("inactive");
        dskMenu.classList.toggle("inactive");
    }
}

function toggleMobileMenu(){
    const isProductDetail = productDetail.classList.contains("inactive");
    const isDetailView = detailView.classList.contains("inactive");

    if(isProductDetail && isDetailView){
        mobileMenu.classList.toggle("inactive");
    } else if(!isProductDetail){
        productDetail.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    } else if(!isDetailView){
        detailView.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }
}

function toggleProdcutDetail(){
    const isMobileMenu = mobileMenu.classList.contains("inactive");
    const isDskMenu = dskMenu.classList.contains("inactive");
    const isDetailView = detailView.classList.contains("inactive");

    if(isDskMenu){
        if(isDetailView){
            if(isMobileMenu){
                productDetail.classList.toggle("inactive");
            } else if(!isMobileMenu){
                mobileMenu.classList.toggle("inactive");
                productDetail.classList.toggle("inactive");
            }
        } else if(!isDetailView){
            detailView.classList.add("inactive");
            productDetail.classList.toggle("inactive");
        }
    } else if(!isDskMenu){
        dskMenu.classList.add("inactive");
        productDetail.classList.toggle("inactive");
    }  
}

function openProductDetail(){
    const isProductDetail = productDetail.classList.contains("inactive");
    const isDskMenu = dskMenu.classList.contains("inactive");

    if(isProductDetail && isDskMenu){
        detailView.classList.remove("inactive");
    } else if(!isProductDetail){
        productDetail.classList.toggle("inactive");
        detailView.classList.remove("inactive");
    } else if(!isDskMenu){
        dskMenu.classList.add("inactive");
        detailView.classList.remove("inactive");
    }
    
}

function closeProductDetail(){
    detailView.classList.add("inactive");
}

function clicks(){
    numero = numero + 1;
    numberPurchases.innerText = numero;
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Tablet",
    price: 220,
    image: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Cel",
    price: 320,
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Tablet",
    price: 220,
    image: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Cel",
    price: 320,
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Cel",
    price: 320,
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Tablet",
    price: 220,
    image: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Cel",
    price: 320,
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

function renderProducts(array){
    for(product of array){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const image = document.createElement("img");
        image.setAttribute("src", product.image);
        image.addEventListener("click", openProductDetail);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = "$" + product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement("figure");
        productInfoFigure.classList.add("figure");
        productInfoFigure.addEventListener("click", clicks);
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImg);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(image, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);