const db = require('../util/database');

module.exports = class Cart {
    constructor(id, name, price, image, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
    }

    static fetchAllCart() {
        return db.execute('SELECT * FROM `cart`');
    }
    
    static post(name, price, image, quantity) {
        return db.execute('INSERT INTO `cart` (name, price, image, quantity) VALUES (?, ?, ?, ?)',
            [name, price, image, quantity]
        );
    }

    static update(id, quantity) {
        return db.execute('UPDATE `cart` SET quantity=? WHERE id=?',
            [quantity, id]
        );
    }

    static delete(id) {
        return db.execute('DELETE FROM `cart` WHERE id=?',
            [id]
        );
    }


};


