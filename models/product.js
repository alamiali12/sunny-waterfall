const products = [];

function addProduct(name, description, price, image) {
    const product = { id: products.length + 1, name, description, price, image };
    products.push(product);
}

function getProducts() {
    return products;
}

function searchProducts(query) {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase()));
}

function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

module.exports = {
    addProduct,
    getProducts,
    searchProducts,
    getProductsByCategory
};
