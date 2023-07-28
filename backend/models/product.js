const db = require('../util/database');

module.exports = class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    static fetchAllProduct() {
        return db.execute('SELECT * FROM `product`');
    }
    
    static post(name, price, image) {
        return db.execute('INSERT INTO `product` (name, price, image) VALUES (?, ?, ?)',
            [name, price, image]
        );
    }

    static update(id, name, price, image) {
        return db.execute('UPDATE `product` SET name=?, price=?, image=? WHERE id=?',
            [name, price, image, id]
        );
    }

    static delete(id) {
        return db.execute('DELETE FROM `product` WHERE id=?',
            [id]
        );
    }
};


