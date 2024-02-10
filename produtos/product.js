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