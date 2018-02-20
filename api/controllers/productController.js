'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Products'),
    Category = mongoose.model('Categories');

exports.add_product = function (req, res) {
    if (typeof req.body.categories == 'undefined' || req.body.categories.length < 1) {
        // the category array is not defined or has no element
        res.status(400);
        var response = { 'status': 'Error', 'message': 'Kindly enter atleast one category for the product' }
        res.send(response);
        return;
    }
    var new_product = new Product(req.body);
    new_product.save(function (err, product) {
        new_product.categories.forEach(function (value) {
            Category.update({ _id: value },
                { $push: { 'products': new_product._id } }, { upsert: true }, function (err, data) {
                });
        });
        if (err) {
            res.status(400);
            res.send(err);
        }
        res.status(201);
        res.json(product);
    });
};

exports.update_product = function (req, res) {
    Product.update({ _id: req.params.id }, req.body, function (err, product) {
        if (err) {
            res.status(400);
            res.send(err);
        }
        res.status(200);
        res.json(product);
    });
};