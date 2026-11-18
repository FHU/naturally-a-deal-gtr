function renderProducts(products) {
    const grid = document.getElementById("product-grid")
    const template = document.getElementById("card-template")

    grid.replaceChildren();

    for(const product of products) {
        const card = template.content.cloneNode(true)
        const details = card.querySelector(".details")
        const details_div_first = details.children[1]
        const details_div_second = details.children[3]

        const image = card.querySelector(".product-image")
        image.src = product.image_url
        image.alt = product.name
        
        if (product.storage_type !== "") {
            card.querySelector(".product-storage-type").textContent = product.storage_type
        } else {
            card.querySelector(".product-storage-type").style.display = "none"
            details_div_first.style.display = "none"
        }

        card.querySelector(".product-name").textContent = product.name        
        card.querySelector(".product-quantity").textContent = product.quantity
        
        if (product.weight !== "") {
            card.querySelector(".product-weight").textContent = product.weight
        } else {
            card.querySelector(".product-weight").style.display = "none"
            details_div_second.style.display = "none"
        }

        if (product.date_type !== "") {
            card.querySelector(".product-date-type").textContent = `${product.date_type}: `
            card.querySelector(".product-date").textContent = product.date
        } else {
            card.querySelector(".date").style.display = "none"
        }
        card.querySelector(".product-price").textContent = product.price

        if (product.unit_price !== "") {
            card.querySelector(".product-unit-price").textContent = product.unit_price
        } else {
            card.querySelector(".product-unit-price").style.display = "none"
        }
        
        // Card functionality
        const addToCartButton = card.querySelector(".add-to-cart-button");
        const quantityButtons = card.querySelector(".quantity-buttons");
        const productQuantity = Number(product.quantity);
        const quantityValue = card.querySelector(".quantity-value");
        const decreaseButton = card.querySelector(".decrease-quantity");
        const increaseButton = card.querySelector(".increase-quantity");
        
        let quantity = 0;

        addToCartButton.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            quantity += productQuantity;
            quantityValue.textContent = quantity;

            addToCartButton.style.display = "none";
            quantityButtons.style.display = "flex";
        })
        
        // Increase quantity by unit quantity
        increaseButton.addEventListener("click", () => {
            quantity += productQuantity;
            quantityValue.textContent = quantity;
        });
        
        // Decrease quantity by unit quantity
        decreaseButton.addEventListener("click", () => {
            quantity = Math.max(0, quantity - productQuantity);
            quantityValue.textContent = quantity;

            if (quantity <= 0) {
                quantity = 0;

                addToCartButton.style.display = "flex";
                quantityButtons.style.display = "none";
            }
        });

        grid.appendChild(card)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products_list);
});