import logo from './logo.svg';
import './App.css';
//import './component-1.js';


class Product {
    constructor (name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

var myProduct = new Product ("banana", "1$", "Fresh bananas fro Ecuador");
console.log (myProduct);