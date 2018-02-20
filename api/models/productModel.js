'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the product'
  },
  price: {
    type: Number,
    required: 'Kindly enter the price of the product'
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'Categories'
    }
  ],
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Products', ProductSchema);