document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
    const cartItems = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const productID = e.target.dataset.id;
            const productName = e.target.dataset.name;
            const productPrice = parseFloat(e.target.dataset.price);

            const existingProduct = cart.find(item => item.id === productID);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ id: productID, name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} (x${item.quantity}) - $${Number(item.price * item.quantity).toLocaleString("es-CL")}`;
            cartItems.appendChild(listItem);
            totalPrice += item.price * item.quantity;
        });

        totalPriceEl.textContent = `Total: $${Number(totalPrice).toLocaleString("es-CL")}`;
    }
});
