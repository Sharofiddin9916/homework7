const cardsContainer = document.getElementById("cards-container");
const tableContainer = document.getElementById("table-container");
const tableBody = tableContainer.querySelector("tbody");
const toggleButton = document.getElementById("toggleView");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        renderCards(products);
        renderTable(products);
    })
    .catch(error => console.error("Xatolik:", error));

function renderCards(products) {
    cardsContainer.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${product.image}" alt="Product">
            <p><strong>${product.category}</strong></p>
            <p>Price: $${product.price}</p>
            <p>${product.title}</p>
        `;
        cardsContainer.appendChild(card);
    });
}

function renderTable(products) {
    tableBody.innerHTML = "";
    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${product.image}" width="50"></td>
            <td>${product.category}</td>
            <td>$${product.price}</td>
            <td>${product.title}</td>
        `;
        tableBody.appendChild(row);
    });
}

toggleButton.addEventListener("click", () => {
    if (cardsContainer.classList.contains("hidden")) {
        cardsContainer.classList.remove("hidden");
        tableContainer.classList.add("hidden");
        toggleButton.textContent = "Table";
    } else {
        cardsContainer.classList.add("hidden");
        tableContainer.classList.remove("hidden");
        toggleButton.textContent = "Cards";
    }
});
