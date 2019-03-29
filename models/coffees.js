
const db = require('./conn');

class Coffee {
    constructor(id, name, type, size, price) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}