const path = require('path');
const Product = require('../models/product');
const fs = require('fs');
//const { type } = require('os');



module.exports.WatchUserHomePage = (req,res,next)=>
{
   Product.fetchAllProducts(products=>
      {
         res.render('../Front_view/shop.ejs',
               {
                  value_type:products,
               });
      });
   // 
   //  let pdts = [];
   //  const p = path.join(__dirname,'../','data','products.json'); // find location of json file
   //  fs.readFile(p,'utf-8',(err,fileContent)=> //read contents of json file
   //  {
   //    if(err)
   //    {
   //       console.log("Nothing to display");
   //       res.send('<h1>No contents in file</h1>');
   //    }
   //    else
   //    {
   //       pdts = JSON.parse(fileContent);
   //       res.render('../Front_view/shop.ejs',
   //       {
   //          value_type:pdts,
   //       });
   //    }
   //    // pdts.forEach(value=> 
   //    // {
         
   //    // });
   //  });
    
};


 //var obj = [ [ { title: '1st ' } ] ];