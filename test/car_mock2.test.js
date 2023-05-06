const { CarModel } = require('../src/infrastructure/database');
const car = require('../src/port/car_repository');

it('Valid Car', async () => {
    CarModel.prototype.save = jest.fn().mockImplementation(() => ({
        toObject: () => ({
            id: 1,
            marca: "AAA",
            modelo: "AAA",
            cor: "AA",
            ano: 2020,
        }),
    }));

    expect(await car.create({
        id: 1,
        marca: "AAAAAAAA",
        modelo: "AAA",
        cor: "AA",
        ano: 2020
    })).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            marca: expect.any(String),
            modelo: expect.any(String),
            cor: expect.any(String),
            ano: expect.any(Number),
        }),
    );
});

it('Valid edit', async () => {
    CarModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
        exec: () => ({
            toObject: () => ({
                id: 2,
                marca: "BBB",
                modelo: "BBB",
                cor: "BB",
                ano: 2021,
            }),
        }),
    }));

    expect(await car.update({
        marca: 'CCC',
        modelo: 'CCC',
    })).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            marca: expect.any(String),
            modelo: expect.any(String),
            cor: expect.any(String),
            ano: expect.any(Number),
        }),
    );
});

describe('listCars', () => {
    it('Valid list', async () => {
        CarModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 3,
                marca: "DDD",
                modelo: "DDD",
                cor: "DD",
                ano: 2022,
            }),
        }));

        expect(await car.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                marca: "DDD",
                modelo: "DDD",
                cor: "DD",
                ano: 2022,
            }),
        );

    });

    it('Valid list by Marca', async () => {
        CarModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 3,
                marca: "DDD",
                modelo: "DDD",
                cor: "DD",
                ano: 2022,
            }),
        }));

        expect(await car.listByMarca({
            marca: "EEE"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                marca: "DDD",
                modelo: "DDD",
                cor: "DD",
                ano: 2022,
            }),
        );

    });
});