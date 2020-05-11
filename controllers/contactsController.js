exports.getContacts = (req,res)=>{
    res.render('./contacts', {
        pageTitle: 'Контакти'
    }); 
}