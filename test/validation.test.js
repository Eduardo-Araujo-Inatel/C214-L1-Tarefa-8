const Constants = require("../src/utils/constants");
const Validation = require("../src/utils/validation");


it('Caso valido', ()=>{
    const result = Validation.create({
        marca: "AAA",
        modelo: "AAA",
        cor: "AAA",
        ano: 2020
    })
    expect(result).toEqual(undefined)
})

it('Caso invalido, sem parametro ano', () => {
    const result = Validation.create({
        marca: "AAA",
        modelo: "AAA",
        cor: "AAA"
    })
    expect(result).toEqual(Constants.ErrorValidation)
});

it('Caso valido de listagem por marca', ()=>{
    const result = Validation.listByMarca({
        marca: "AAA"
    })
    expect(result).toEqual(undefined)
})

it('Caso invalido de listagem por marca, marca não informada', ()=>{
    const result = Validation.listByMarca({
        modelo: "AAA"
    })
    expect(result).toEqual(Constants.ErrorValidation)
})

it('Caso valido de deleção por marca', ()=>{
    const result = Validation.deleteAllByMarca({
        marca: "AAA"
    })
    expect(result).toEqual(undefined)
})

it('Caso invalido de deleção por marca, nada informado', ()=>{
    const result = Validation.deleteAllByMarca({})
    expect(result).toEqual(Constants.ErrorValidation)
})

it('Caso valido de update por marca e modelo', ()=>{
    const result = Validation.update({
        marca: "AAA",
        modelo: "AAA"
    })
    expect(result).toEqual(undefined)
})

it('Caso invalido de update por marca e modelo, modelo não informado', ()=>{
    const result = Validation.update({
        marca: "AAA",
    })
    expect(result).toEqual(Constants.ErrorValidation)
})

it('Caso invalido de update por marca e modelo, nada informado', ()=>{
    const result = Validation.update({})
    expect(result).toEqual(Constants.ErrorValidation)
})