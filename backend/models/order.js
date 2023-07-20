const db = require('../util/database');

module.exports = class Order {
    constructor(id, name, price, image, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM `order`');
    }
    
    static post(name, price, image, quantity) {
        return db.execute('INSERT INTO `order` (name, price, image, quantity) VALUES (?, ?, ?, ?)',
            [name, price, image, quantity]
        );
    }

    static update(id, quantity) {
        return db.execute('UPDATE `order` SET quantity=? WHERE id=?',
            [quantity, id]
        );
    }

    static delete(id) {
        return db.execute('DELETE FROM `order` WHERE id=?',
            [id]
        );
    }
};

