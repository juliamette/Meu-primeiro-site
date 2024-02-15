const filterElement = document.querySelector('header input')

const products = document.querySelectorAll('.allproducts li')

filterElement.addEventListener('input', filterProducts)

function filterProducts() {
    if(filterElement.value != '') {
        for(let product of products) {
            let title = product.querySelector('h2')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            if(!title.includes(filterText)) {
                product.style.display = "none"
            }else {
                product.style.display = "block"
            }
        }
    }else {
        for(let product of products) {
            product.style.display = "block"
        }
    }
}



//Imagem 1
const imagem1 = document.getElementById('img1');

const srcOriginal1 = imagem1.src;

const srcHover1 = 'img1.png'; 

imagem1.addEventListener('mouseover', function() {
  imagem1.src = srcHover1; 
});

imagem1.addEventListener('mouseout', function() {
  imagem1.src = srcOriginal1; 
});

//Imagem 2
const imagem2 = document.getElementById('img2');

const srcOriginal2 = imagem2.src;

const srcHover2 = 'img2.png'; 

imagem2.addEventListener('mouseover', function() {
  imagem2.src = srcHover2; 
});

imagem2.addEventListener('mouseout', function() {
  imagem2.src = srcOriginal2; 
});

//Imagem 3
const imagem3 = document.getElementById('img3');

const srcOriginal3 = imagem3.src;

const srcHover3 = 'img3.png'; 

imagem3.addEventListener('mouseover', function() {
  imagem3.src = srcHover3; 
});

imagem3.addEventListener('mouseout', function() {
  imagem3.src = srcOriginal3; 
});

//Imagem 4
const imagem4 = document.getElementById('img4');

const srcOriginal4 = imagem4.src;

const srcHover4 = 'img4.png'; 

imagem4.addEventListener('mouseover', function() {
  imagem4.src = srcHover4; 
});

imagem4.addEventListener('mouseout', function() {
  imagem4.src = srcOriginal4; 
});

//Imagem 5
const imagem5 = document.getElementById('img5');

const srcOriginal5 = imagem5.src;

const srcHover5 = 'img5.png'; 

imagem5.addEventListener('mouseover', function() {
  imagem5.src = srcHover5; 
});

imagem5.addEventListener('mouseout', function() {
  imagem5.src = srcOriginal5; 
});

//Imagem 6
const imagem6 = document.getElementById('img6');

const srcOriginal6 = imagem6.src;

const srcHover6 = 'img6.png'; 

imagem6.addEventListener('mouseover', function() {
  imagem6.src = srcHover6; 
});

imagem6.addEventListener('mouseout', function() {
  imagem6.src = srcOriginal6; 
});

//Imagem 7
const imagem7 = document.getElementById('img7');

const srcOriginal7 = imagem7.src;

const srcHover7 = 'img7.png'; 

imagem7.addEventListener('mouseover', function() {
  imagem7.src = srcHover7; 
});

imagem7.addEventListener('mouseout', function() {
  imagem7.src = srcOriginal7; 
});

//Imagem 8
const imagem8 = document.getElementById('img8');

const srcOriginal8 = imagem8.src;

const srcHover8 = 'img8.png'; 

imagem8.addEventListener('mouseover', function() {
  imagem8.src = srcHover8; 
});

imagem8.addEventListener('mouseout', function() {
  imagem8.src = srcOriginal8; 
});

//Imagem 9
const imagem9 = document.getElementById('img9');

const srcOriginal9 = imagem9.src;

const srcHover9 = 'img9.png'; 

imagem9.addEventListener('mouseover', function() {
  imagem9.src = srcHover9; 
});

imagem9.addEventListener('mouseout', function() {
  imagem9.src = srcOriginal9; 
});

//Imagem 10
const imagem10 = document.getElementById('img10');

const srcOriginal10 = imagem10.src;

const srcHover10 = 'img10.png'; 

imagem10.addEventListener('mouseover', function() {
  imagem10.src = srcHover10; 
});

imagem10.addEventListener('mouseout', function() {
  imagem10.src = srcOriginal10; 
});

//Imagem 11
const imagem11 = document.getElementById('img11');

const srcOriginal11 = imagem11.src;

const srcHover11 = 'img11.png'; 

imagem11.addEventListener('mouseover', function() {
  imagem11.src = srcHover11; 
});

imagem11.addEventListener('mouseout', function() {
  imagem11.src = srcOriginal11; 
});

//Imagem 12
const imagem12 = document.getElementById('img12');

const srcOriginal12 = imagem12.src;

const srcHover12 = 'img12.png'; 

imagem12.addEventListener('mouseover', function() {
  imagem12.src = srcHover12; 
});

imagem12.addEventListener('mouseout', function() {
  imagem12.src = srcOriginal12; 
});

//Imagem 13
const imagem13 = document.getElementById('img13');

const srcOriginal13 = imagem13.src;

const srcHover13 = 'img13.png'; 

imagem13.addEventListener('mouseover', function() {
  imagem13.src = srcHover13; 
});

imagem13.addEventListener('mouseout', function() {
  imagem13.src = srcOriginal13; 
});

//Imagem 14
const imagem14 = document.getElementById('img14');

const srcOriginal14 = imagem14.src;

const srcHover14 = 'img14.png'; 

imagem14.addEventListener('mouseover', function() {
  imagem14.src = srcHover14; 
});

imagem14.addEventListener('mouseout', function() {
  imagem14.src = srcOriginal14; 
});

//Imagem 15
const imagem15 = document.getElementById('img15');

const srcOriginal15 = imagem15.src;

const srcHover15 = 'img15.png'; 

imagem15.addEventListener('mouseover', function() {
  imagem15.src = srcHover15; 
});

imagem15.addEventListener('mouseout', function() {
  imagem15.src = srcOriginal15; 
});

