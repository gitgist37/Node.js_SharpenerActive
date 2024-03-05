const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart 
{
    static addProduct(id, productPrice)
    {
        fs.readFile(p, (err, fileContent)=>
        {
            let cart = {products: [], totalPrice: 0};
            if(!err)
            {
                cart = JSON.parse(fileContent);
            }

            const ProductExistsIndex = cart.products.findIndex(prod => prod.id===id);
            const ProductExists = cart.products[ProductExistsIndex];
            let newProduct;
            if(ProductExists)
            {
                newProduct = {...ProductExists};
                newProduct.qty = newProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[ProductExistsIndex] = newProduct;
            }
            else
            {
                newProduct = {id:id, qty:1};
                cart.products = [...cart.products, newProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err)=>console.log(err));
           
        });
    }

    static deleteProduct(id, productPrice)
    {
        fs.readFile(p, (err, fileContent)=>
        {
            if(err)
            {
                return;
            }
            const updatedCart = {...JSON.parse(fileContent)};
            const product = updatedCart.products.find(prod => prod.id===id);
            if(!product)
            {
                return;
            }
            const productQty = product.qty;
            updatedCart.products =  updatedCart.products.filter(prod => prod.id!==prod);
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice*productQty;

            fs.writeFile(p, JSON.stringify(updatedCart), (err)=>console.log(err));    
        });
    }
};