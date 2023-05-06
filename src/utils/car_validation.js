const create = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const update = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const getByMarca = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteByMarca = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};


module.exports = {
    create,
    update,
    getByMarca,
    deleteBy,
    deleteByMarca
};