const CalculadoraService = require('../src/calculadora');
const SomaTestObjects = require('./objects/soma_test_objects');

test('Teste Soma Válida', async () => {
    const result = await CalculadoraService.soma(SomaTestObjects.SomaValid);
    expect(result).toEqual(2);
});

test('Teste Soma Inválida - Strings', async () => {
    const result = await CalculadoraService.soma(SomaTestObjects.SomaInvalid_String);
    expect(result).toEqual("Erro de Validação");
});