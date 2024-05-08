// Sample data for cart items
const cartItems = [
    { id: 1, name: "Banana", price: 105, quantity: 1 },
    { id: 2, name: "Apples", price: 200, quantity: 1 },
    { id: 3, name: "Laptop", price: 30000, quantity: 1 }
];

// Function to render cart items
function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";
    cartItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `
            <div class="row">
                <div class="col">${item.name}</div>
                <div class="col">Price: $${item.price}</div>
                <div class="col">
                    <button class="btn btn-secondary btn-sm" onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn btn-secondary btn-sm" onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <div class="col">
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${item.id})">Remove</button>
                </div>
                <div class="col">
                    <button class="btn btn-light btn-sm" onclick="likeItem(${item.id})">
                        <span id="like-icon-${item.id}" class="fa fa-heart"></span>
                    </button>
                </div>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });
}

// Function to calculate total price
function calculateTotalPrice() {
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}

// Function to increase quantity
function increaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    item.quantity++;
    renderCart();
    calculateTotalPrice();
}

// Function to decrease quantity
function decreaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item.quantity > 1) {
        item.quantity--;
        renderCart();
        calculateTotalPrice();
    }
}

// Function to remove item from cart
function removeItem(itemId) {
    const index = cartItems.findIndex(item => item.id === itemId);
    cartItems.splice(index, 1);
    renderCart();
    calculateTotalPrice();
}

// Function to like/unlike item
function likeItem(itemId) {
    const likeIcon = document.getElementById(`like-icon-${itemId}`);
    likeIcon.classList.toggle("text-danger");
}

// Initial rendering
renderCart();
calculateTotalPrice();
