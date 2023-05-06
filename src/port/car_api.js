const Car = require('../application/car_service');
const Utils = require('../utils/utils');

const route = '/car';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Car.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Car.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Car.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete/:marca&:modelo`, async (req, res) => {
        const data = req.body;
        const { marca, modelo } = req.params;
        data.marca = marca;
        data.modelo = modelo;
        const response = await Car.delete(data);
        res.status(Utils.responseStatus(response.modelo));
        res.json(response);
    });

    app.get(`${route}/listByMarca`, async (req, res) => {
        const response = await Car.listByMarca(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.delete(`${route}/deleteAllByMarca`, async (req, res) => {
        const response = await Car.deleteByMarca(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};