const CalculadoraService = require('../src/calculadora');
const DivTestObjects = require('./objects/divisao_test_objects');

test('Teste Divisão Válida', async () => {
    const result = await CalculadoraService.divisao(DivTestObjects.DivValid);
    expect(result).toEqual(6);
})

test('Teste Divisão Inválida - Nome Errado de Variável', async () => {
    const result = await CalculadoraService.divisao(DivTestObjects.DivInvalid_WrongName);
    expect(result).toEqual("Erro de Validação");
})