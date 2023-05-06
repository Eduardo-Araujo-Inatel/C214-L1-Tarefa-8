const Constants = require("../src/utils/constants");
const Utils = require("../src/utils/utils")

it('Status code OK', ()=>{
    const result = Utils.responseStatus(undefined)
    expect(result).toEqual(200)
})

it('Status code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name)
    expect(result).toEqual(400)
});
