const validate = require('validate.js');
const Constants = require('./constants');
const Constraints = require('./car_validation');

const Validation = {
    create(data) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    listByMarca(data) {
        const validation = validate.validate(data, Constraints.getByMarca);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    update(data) {
        const validation = validate.validate(data, Constraints.update);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    delete(data) {
        const validation = validate.validate(data, Constraints.deleteBy);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    deleteAllByMarca(data) {
        const validation = validate.validate(data, Constraints.deleteByMarca);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },
};
module.exports = Validation;
