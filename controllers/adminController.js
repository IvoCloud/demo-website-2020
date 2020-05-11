const Product = require('../models/product');

exports.AddProduct = (req,res,next) =>{
    const product = new Product(
        req.body.title,
        req.body.price,
        req.body.quantity,
        req.body.description);
    product.save();
    res.send('OK');
    //res.redirect('/admin/add-product');
}



exports.getProducts = (req,res)=>{
    Product.getProducts((products)=>{
        res.render('./admin/admin', {
            pageTitle: 'Админ',
            products: products,
        }); 
    }); 
}