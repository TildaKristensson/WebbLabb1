
const products = [
    {name: "Basic trimming and styling", price: 250, image: "/pictures/basic.jpg"},
    {name: "Complex trimming and styling", price: 300, image: "/pictures/complex.jpg"},
    {name: "Bath & Trim", price: 450, image: "/pictures/bath.jpg"},
    {name: "Nail Clipping", price: 185, image: "/pictures/nail.jpg"},
    {name: "Full Grooming", price: 575, image: "/pictures/full.jpg"},

];

let cart = [];
let total = 0;

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2>${product.name}</h2>
        <p>Price: ${product.price} kr</p>
        <button onclick="addToCart(${index})">Add</button>
        `;

        productList.appendChild(productDiv);
    });
}

function addToCart(index) {
    const product = products[index];
    cart.push(product);
    total += product.price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart");
    const totalElement = document.getElementById("total");

    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ${item.price} kr <button onclick="removeFromCart(${index})">X</button>`;
        cartList.appendChild(li);
    });

    totalElement.textContent = total;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

displayProducts();