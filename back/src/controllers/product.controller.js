const genericCrud = require('./generic.conrtoller')
const {Product} = require('../model')
 

module.exports = {
    ...genericCrud(Product),
};