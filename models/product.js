const fs = require('fs');
const path = require('path');
const rootDir = require('../routes/helper/paths');
const pathLocation = path.join(rootDir,
    'data',
    'products.json'
);

const getProductsFromFile = (cb)=>{
    fs.readFile(pathLocation,'utf8',(err,fileData)=>{
        if(err){
            cb([]);
            console.log('Error in err:' + err);
        }else{
            if(fileData.charAt(0)==='['&&fileData.endsWith(']')){
                cb(JSON.parse(fileData));
            }else{
                cb([]);
            }
        }
    });
}

module.exports = class Product {
    constructor(title,price,quantity,description){
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    save(){
        getProductsFromFile((products)=>{
            products.push(this);
            fs.writeFile(pathLocation, JSON.stringify(products),(err)=>{
                console.log("Errors: "+err);
            });
        });
    }

    static getProducts(cb){
        getProductsFromFile(cb);
    }
}