const productCards = document.querySelectorAll(".card");
const grid = document.getElementById("product-grid")
const template = document.getElementById("card-template")

function renderProducts(products) {
    grid.replaceChildren();

    for(const product of products) {
        const card = template.content.cloneNode(true)

        const image = card.querySelector(".product-image")
        image.src = `${product.image}`
        image.alt = `${product.name}`
        card.querySelector(".product-storage-type").textContent = product.storage_type
        card.querySelector(".product-name").textContent = product.name        
        card.querySelector(".product-quantity").textContent = product.quantity
        card.querySelector(".product-weight").textContent = product.weight
        card.querySelector(".product-condition-type").textContent = product.condition_type
        card.querySelector(".product-condition").textContent = product.condition
        card.querySelector(".product-price").textContent = product.price
        card.querySelector(".product-unit-price").textContent = product.unit_price

        const productQuantity = Number(product.quantity);
        const quantityValue = card.querySelector(".quantity-value");
        const decreaseButton = card.querySelector(".decrease-quantity");
        const increaseButton = card.querySelector(".increase-quantity");

        let quantity = 0;

        // Increase quantity by unit quantity
        increaseButton.addEventListener("click", () => {
            quantity += productQuantity;
            quantityValue.textContent = quantity;
        });

        // Decrease quantity by unit quantity
        decreaseButton.addEventListener("click", () => {
            quantity = Math.max(0, quantity - productQuantity);
            quantityValue.textContent = quantity;
        });

        grid.appendChild(card)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products_list);
});