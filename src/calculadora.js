const validate = require('validate.js');

const Constraints = require('./validate');

const Calculadora = {
    async soma(data) {
        const validation = validate.validate(data, Constraints.soma);
        if (validation) {
            const response = Constants.ERR_Validation;
            return response;
        }
        const soma = data.number1 + data.number2;
        return soma;
    },
};

module.exports = Calculadora;