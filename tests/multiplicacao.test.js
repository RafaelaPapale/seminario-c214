const CalculadoraService = require('../src/calculadora');
const MultTestObjects = require('./objects/multiplicacao_test_objects');

test('Teste Multiplicação Válida', async () => {
    const result = await CalculadoraService.multiplicacao(MultTestObjects.MultValid);
    expect(result).toEqual(54);
});