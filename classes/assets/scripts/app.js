class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const productElement = document.createElement('li');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}" />
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        `;
        const addToCartBtn = productElement.querySelector('button');
        addToCartBtn.addEventListener('click', this.addToCart.bind(this));
        return productElement;
    }
}

class ProductCollection {
    products = [
        new Product(
            'A Pillow',
            'https://m.media-amazon.com/images/I/61wJMcvCKTL._SR500,500_.jpg',
            'A soft pillow.',
            19.99
        ),
        new Product(
            'A Carpet',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7ddh0wE4hPXO5_3zQtVs94NmbP3o6TnWRYixT029aQDDZjO9iqEQaB6iBgA&usqp=CAc',
            'A carpet that you might like.',
            600.97
        )
    ];

    render() {
        const productListElement = document.createElement('ul');
        productListElement.className = 'product-list';

        for(const product of this.products) {
            const productItem = new ProductItem(product);
            productListElement.append(productItem.render());
        }

        return productListElement;
    }
}

class Cart {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalElement.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount () {
        return this.items.reduce(
            (prevPrice, item) => prevPrice + item.price,
            0
        );
    }

    addProduct(product) {
        this.cartItems = [...this.items, product]
    }

    render() {
        const cartElement = document.createElement('section');
        cartElement.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        cartElement.className = 'cart';

        this.totalElement = cartElement.querySelector('h2');
        return cartElement;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');

        this.cart = new Cart();
        const cartElement = this.cart.render();
        const productList = new ProductCollection();
        const productListElement = productList.render();

        renderHook.append(cartElement);
        renderHook.append(productListElement);
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();

