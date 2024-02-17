let product_array = [];
const fs = require('fs');
const path = require('path');

module.exports = class Product 
{
    constructor(value)
    {   
        this.title = value; 
    }

    saveProduct()
    {
        //console.log(x,"This is dipshika from saveProduct");
        const p = path.join(__dirname,'..','data','products.json'); // correct

       fs.readFile(p, (err,fileContent)=>
       {
        let products = [];
        //console.log("displaying file content type",typeof(fileContent));
        if(!err)  // hello world
        {
            if(fileContent.toString('utf-8').length>0)
            {
                products = JSON.parse(fileContent);
                //console.log(products);
            }
        }
        //console.log(products);
        products.push(this); // current data to be pushed onto the file
        product_array = [...products];
        fs.writeFile(p, JSON.stringify(products), (err)=>console.log(err));
       });
    }


    static fetchAllProducts(cb)
    {
        const p = path.join(__dirname,'..','data','products.json');
        fs.readFile(p, (err,fileContent)=>
        {
            if(err)
            {
                cb([]);
            }

            cb(JSON.parse(fileContent));
        });
        
    }
};
