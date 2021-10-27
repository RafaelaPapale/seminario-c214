const CalculadoraService = require('../src/calculadora');
const SomaTestObjects = require('./objects/soma_test_objects');

test('Teste Soma Válida', async () => {
    const result = await CalculadoraService.soma(SomaTestObjects.SomaValid);
    expect(result).toEqual(2);
})