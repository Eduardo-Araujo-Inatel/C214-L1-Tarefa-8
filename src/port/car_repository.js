const { CarModel } = require('../infrastructure/database');

const CarRepository = {
    async create(data) {
        try {
            const model = new CarModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await CarModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const update = {
                marca: data.marca,
                modelo: data.modelo,
                cor: data.cor,
                ano: data.ano,
            };
            const options = { new: true };
            const filter = {
                marca: data.marca,
                modelo: data.modelo
            };
            const result = await CarModel.findOneAndUpdate(filter, update, options).exec();
            console.log(result)
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const filter = {
                marca: data.marca,
                modelo: data.modelo
            };
            const result = await CarModel.deleteOne(filter).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },

    async listByMarca(data) {
        try {
            const filter = {
                marca: data.marca
            };
            const result = await CarModel.find(filter).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async deleteAllByMarca(data) {
        try {
            const filter = {
                marca: data.marca,
            };
            const result = await CarModel.deleteMany(filter).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = CarRepository;