// Função para atualizar o carrinho
let cartCount = 0;

function updateCart() {
    document.getElementById("cart-count").textContent = cartCount;
}

// Função para adicionar produto ao carrinho
function addToCart(event) {
    const button = event.target;
    const product = button.getAttribute("data-product");
    const price = parseFloat(button.getAttribute("data-price"));

    cartCount++;
    updateCart();
    alert(`Você adicionou ${product} ao carrinho. Preço: R$ ${price.toFixed(2)}`);
}

// Adicionando eventos de clique aos botões
const buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach(button => {
    button.addEventListener("click", addToCart);
});
