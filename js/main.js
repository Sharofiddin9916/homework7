const rootEl = document.querySelector(".root");

rootEl.innerHTML += `
    <h1>Homework!</h1>
    <div class="container"></div>
`;

// rendering
function productCardsRendering(productsList) {
    const container = rootEl.querySelector(".container");

    productsList.forEach(element => {  
        console.log(element);
              
        container.innerHTML += `
            <div class="card">
                <img 
                    class="card-image"
                    src="${element.image}" 
                    alt="there is a product" 
                /> 
                <br>
                <p class="p1">${element.category}</p>
                <p class="phoneP">price : ${element.price}</p>
                <p">title: ${element.title}</p>
            </div>
        `;
    });
}

// fetching
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((result) => productCardsRendering(result))  
    .catch(error => console.error("Xatolik yuz berdi:", error));
