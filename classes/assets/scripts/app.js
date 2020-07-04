const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl: 'https://m.media-amazon.com/images/I/61wJMcvCKTL._SR500,500_.jpg',
            price: 19.99,
            description: 'A soft pillow.'
        },
        {
            title: 'A Carpet',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7ddh0wE4hPXO5_3zQtVs94NmbP3o6TnWRYixT029aQDDZjO9iqEQaB6iBgA&usqp=CAc',
            price: 600.97,
            description: 'A carpet that you might like.'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const productListElement = document.createElement('ul');
        productListElement.className = 'product-list';

        for(const product of this.products) {
            const productElement = document.createElement('li');
            productElement.className = 'product-item';
            productElement.innerHTML = `
                <div>
                    <img src="${product.imageUrl}" alt="${product.title}" />
                    <div class="product-item__content">
                        <h2>${product.title}</h2>
                        <h3>\$${product.price}</h3>
                        <p>${product.description}</p>
                        <button>Add to cart</button>
                    </div>
                </div>
            `;

            productListElement.append(productElement);
        }

        renderHook.append(productListElement);
    }
};

productList.render();