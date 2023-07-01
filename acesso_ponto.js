const cliente = {
    nome: 'Andre',
    idade: 32,
    cpf: '1111',
    email: 'andre@dominio.com',
};

console.log(`O nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade} anos.`);

console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0,3)}.`);