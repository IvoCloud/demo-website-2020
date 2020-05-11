const Product = require('../models/product');

exports.getAddProducts = (req,res,next) =>{
    res.render('./admin/admin',{
        pageTitle: 'Админ'
    });
}

exports.displayProducts = (req,res)=>{
    Product.getProducts((products)=>{
        res.render('./shop/products', {
            pageTitle: 'Продукти',
            products: products,
        }); 
    }); 
}