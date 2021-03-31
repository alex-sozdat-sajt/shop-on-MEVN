const genericCrud = require('./generic.conrtoller')
const {Category} = require('../model')
 

module.exports = {
    ...genericCrud(Category),
}