const mongoose = require('mongoose');
const ProductModel = mongoose.model('ProductModel');


module.exports = {
    async index(req, res) {
        const products = await ProductModel.find();
        return res.json(products);
    },

    async create(req, res) {
        const product = await ProductModel.create(req.body);

        return res.send(product);
    },

    async show(req, res) {
        const product = await ProductModel.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res) {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async delete(req, res) {
        await ProductModel.findByIdAndRemove(req.params.id);

        return res.send();
    }
}