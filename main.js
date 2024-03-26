
console.log('JS funcionando');
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailIconClose = document.querySelector('.product-detail-close');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartdContainer = document.querySelector('#shoppingCartdContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container')


// Descripción de los eventos que van a suceder
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailIconClose.addEventListener('click', closeProductDetailAside);

//ClassList.toggle quita o pone una clase
function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartdContainer.classList.contains('inactive');

    if (!isAsideClosed) {    
        shoppingCartdContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
};


function toggleMobileMenu(){
    const isAsideClosed = shoppingCartdContainer.classList.contains('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartdContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    if (!isAsideClosed) {    
        shoppingCartdContainer.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive')
};

//Está open si NO tiene la clase inactive

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


    if ((!isMobileMenuClosed)||(!isDesktopMenuClosed)||(!isProductDetailClosed)){    
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }



    shoppingCartdContainer.classList.toggle('inactive')
};


//Función para simplemente abrir el modal de detalles del producto

function openProductDetailAside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartdContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

//Arreglo para tener datos dinámicos
const productList = [];


//Elementos dinámicos de ejemplo
productList.push({
    name: 'Pepa',
    price : 300,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Celuko',
    price : 6000000,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pala',
    price : 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Bici',
    price : 400,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pepa',
    price : 300,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Celuko',
    price : 6000000,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pala',
    price : 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Bici',
    price : 400,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
<div class="product-card">

<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/

//For para recorrer la lista y pasarlo a HTML  for - of
function renderProducts(arr){
    for (product of arr){
        //Se debe crear el elemento desde js para que vaya a html
        //<div class="product-card">
       const productCard = document.createElement('Div');
       productCard.classList.add('product-card');  
        //<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
       const productImg = document.createElement('img');
       productImg.setAttribute('src', product.image);  
       
       productImg.addEventListener('click', openProductDetailAside);

        //<div class="product-info">
       const productInfo = document.createElement('Div');
       productInfo.classList.add('product-info');  
       //<div>
       const productInfoDiv = document.createElement('Div');  
       //<p>$120,00</p>
       const productPrice = document.createElement('p');
       productPrice.innerText = '$' + product.price;
        //<p>Bike</p>
        const productName = document.createElement('p');
        productName.innerText = product.name; 
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        //<figure>
        const productfigure = document.createElement('figure');
        //<img src="./icons/bt_add_to_cart.svg" alt="">
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        productfigure.appendChild(productImgCart);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productfigure);
        cardsContainer.appendChild(productCard); 
    }
}

renderProducts(productList);



