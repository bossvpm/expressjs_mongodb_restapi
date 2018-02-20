'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the category'
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
  child_categories: [{ type: String, ref: 'Categories' }],
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Categories', CategorySchema);