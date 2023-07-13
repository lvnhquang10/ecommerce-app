const db = require('../util/database');

module.exports = class Product {
    constructor(id ,name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM product');
    }
    static save(product) {
        return db.execute(
            'INSERT INTO product (name, price, image) VALUES (?, ?, ?)',
            [post.name, post.price, post.image]
        );
    }
    
};


