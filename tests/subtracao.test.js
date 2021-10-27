const CalculadoraService = require('../src/calculadora');
const SubTestObjects = require('./objects/subtracao_test_objects');

test('Teste Subtracao Válida', async () => {
    const result = await CalculadoraService.subtracao(SubTestObjects.SubValid);
    expect(result).toEqual(25);
});

test('Teste Soma Inválida - Faltando parâmetros obrigatórios', async () => {
    const result = await CalculadoraService.subtracao(SubTestObjects.SubInvalid_EmptyParams);
    expect(result).toEqual("Erro de Validação");
});