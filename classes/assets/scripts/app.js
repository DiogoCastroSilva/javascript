class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

class ElementAttribute {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

class Component {
    constructor(renderHookId, isToRender = true) {
        this.hookId = renderHookId;
        if (isToRender) {
            this.render();
        }
    }

    render() {}

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            attributes.forEach(attribute => {
                rootElement.setAttribute(attribute.name, attribute.value);
            });
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ProductItem extends Component {
    constructor(hookId, product) {
        super(hookId, false);
        this.product = product;
        this.render();
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const productElement = this.createRootElement('li', 'product-item');
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
    }
}

class ProductCollection extends Component {
    #products = [];

    constructor(hookId) {
        super(hookId, false);
        this.render();
        this.fetchProducts();
    }

    fetchProducts() {
        this.#products = [
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
        this.render();
    }

    renderProducts() {
        for(const product of this.#products) {
            new ProductItem('prod-list', product);
        }
    }

    render() {
        const productListElement = this.createRootElement(
            'ul',
            'product-list',
            [new ElementAttribute('id', 'prod-list')]
        );

        if (this.#products && this.#products.length > 0) {
            this.renderProducts();
        }
        
        return productListElement;
    }
}

class Cart extends Component {
    items = [];

    constructor(renderHookId) {
        super(renderHookId);
    }

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

    orderProducts() {
        console.log('Orderirng...', this.items);
    }

    render() {
        const cartElement = this.createRootElement('section', 'cart');
        cartElement.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;

        const orderBtn = cartElement.querySelector('button');
        orderBtn.addEventListener('click', () => this.orderProducts());
        this.totalElement = cartElement.querySelector('h2');
    }
}

class Shop {
    render() {
        this.cart = new Cart('app');
        new ProductCollection('app');
        return this;
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop().render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();

