const validate = require('validate.js');

const Constraints = require('./validate');

const Calculadora = {
    async soma(data) {
        const validation = validate.validate(data, Constraints.numbers);
        if (validation) {
            const response = "Erro de Validação";
            return response;
        }
        const soma = data.number1 + data.number2;
        return soma;
    },

    async subtracao(data) {
        const validation = validate.validate(data, Constraints.numbers);
        if (validation) {
            const response = "Erro de Validação";
            return response;
        }
        const sub = data.number1 - data.number2;
        return sub;
    },

    async divisao(data) {
        const validation = validate.validate(data, Constraints.numbers);
        if (validation) {
            const response = "Erro de Validação";
            return response;
        }
        const div = data.number1 / data.number2;
        return div;
    },

    async multiplicacao(data) {
        const validation = validate.validate(data, Constraints.numbers);
        if (validation) {
            const response = "Erro de Validação";
            return response;
        }
        const mult = data.number1 * data.number2;
        return mult;
    },
};

module.exports = Calculadora;