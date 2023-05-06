
 
const Cars = require('../src/application/car_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const CarsRepository = require('../src/port/car_repository');

jest.mock('../src/port/car_repository');

it('POST - Dados válidos', async () => {
    const data = {
        marca: "AAA",
        modelo: "AAA",
        cor: "AAA",
        ano: 2020
    }

    const id = Utils.generateUuid();

    CarsRepository.create.mockResolvedValue({ ...data, id });

    const result = await Cars.create(data);
    expect(result).toEqual({ ...data, id });
})

it('POST - Dados ja existentes', async () => {
    const data = {
        marca: "AAA",
        modelo: "AAA",
        cor: "AAA",
        ano: 2020
    }

    CarsRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Cars.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})
