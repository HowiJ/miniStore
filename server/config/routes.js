//Require the controller
var main = require('../controllers/main.js');
//////////////////////////////////////////////////////////
//                        Routes                        //
//////////////////////////////////////////////////////////
module.exports = function(app) {
    //Gettion
    app.get('/:category', function(req, res) {
        main.index(req, res);
    })

    //Creation
    app.post('/:category', function(req, res) {
        main.create(req, res);
    })
    app.post('/customers', function(req, res) {
        main.create(req, res, 'Customer');
    })
    app.post('/products', function(req, res) {
        main.create(req, res, 'Product');
    })
    app.post('/orders', function(req, res) {
        main.create(req, res, 'Order');
    })

    //Deletion
    app.delete('/:category/:id', function(req, res) {
        main.delete(req, res);
    })
}
