// mongoose
var mongoose = require('mongoose');
//Retreive the User mongoose object

//Model Call
var Customer    = mongoose.model('Customer');
var Product     = mongoose.model('Product');
var Order       = mongoose.model('Order');

//Module Export
module.exports = (function() {
    return {
        index: function(req, res) {
            console.log('Index');
            var category = req.params.category;
            if (category == 'customers') {var Model = Customer;} else
            if (category == 'products') {var Model = Product;}
            if (Model) {
                Model.find({}, function(err, data) {
                    if (err) {console.log(err)} else {
                        res.json(data);
                    }
                })
            }
            if (category == 'orders') {
                Order.find({}).populate('customer product').exec(function(err, orders) {
                    res.json(orders);
                })
            }
        },


        create: function(req, res) {
            console.log('Create: Server Controller');
            var category = req.params.category;
            if (category == 'customers') {
                console.log('CustomersCreate');
                var customer = new Customer(req.body);
                customer.save(function(err) {
                    console.log(err);
                    Console.log('Save')
                    if (err) {console.log(err)} else {
                        res.json(customer);
                        console.log(customer)
                    }
                })
            } else if (category == 'products') {
                console.log('CustomersProduct');
                var product = new Product(req.body);
                product.save(function(err) {
                    if (err) {console.log(err)} else {
                        res.json(product);
                    }
                })
            } else if (category == 'orders') {
                console.log('CustomersOrders');
                var order = new Order(req.body);
                order.save(function(err) {
                    if (err) {console.log(err)} else {
                        res.json(order);
                    }
                })
            }
        },
        delete: function(req, res) {
            console.log('delete');
            var category = req.params.category;
            console.log(category);
            if (category == 'customers') {
                Customer.findOne({_id: req.params.id}, function(err, data) {
                    if (data) {
                        Customer.remove({_id: data._id}, function(err) {
                            if (err) {console.log(err)} else {
                                res.json(data);
                            }
                        });
                    }
                })
            } else if (category == 'products') {
                Product.findOne({_id: req.params.id}, function(err, data) {
                    if (data) {
                        Product.remove({_id: data._id}, function(err) {
                            if (err) {console.log(err)} else {
                                res.json(data);
                            }
                        })
                    }
                })
            } else if (category == 'orders') {
                console.log('Delete Order');
            }
        }
    }
})();
