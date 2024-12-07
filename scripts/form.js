const products = [
    "Product #1",
    "Product #2",
    "Product #3",
    "Product #4",
    "Product #5"
];
const productName = document.querySelector("#product-name");
products.forEach((product) => {
    productName.innerHTML += `<option value="${product}">${product}</option>`;
});