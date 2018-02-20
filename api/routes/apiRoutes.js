'use strict';
module.exports = function (app) {
    var category = require('../controllers/categoryController');

    // Category Routes
    app.route('/add_category')
        .post(category.add_category);

    app.route('/get_categories')
        .get(category.get_categories);

    app.route('/get_products_by_category/:id')
        .get(category.get_products);


    var product = require('../controllers/productController');

    // product Routes
    app.route('/add_product')
        .post(product.add_product);

    app.route('/update_product/:id')
        .put(product.update_product);

};