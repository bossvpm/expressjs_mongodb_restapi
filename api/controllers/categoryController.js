'use strict';

var mongoose = require('mongoose'),
    Category = mongoose.model('Categories');

exports.add_category = function (req, res) {
    var new_category = new Category(req.body);
    new_category.save(function (err, category) {
        if (err) {
            res.status(400);
            res.send(err);
        }
        res.status(201);
        res.json(category);
    });
};

exports.get_categories = function (req, res) {
    Category.find()
        .populate('child_categories', 'name')
        .select('name')
        .exec(function (err, categories) {
            if (err) {
                res.status(400);
                res.send(err);
            }
            res.status(200);
            res.json(categories);
        });
};

exports.get_products = function (req, res) {
    Category.find({ _id: req.params.id })
        .populate('products', 'id name price')
        .select('id name')
        .exec(function (err, products) {
            if (err) {
                res.status(400);
                res.send(err);
            }
            res.status(200);
            res.json(products);
        });
};
