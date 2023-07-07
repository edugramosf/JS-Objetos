const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['115555550', '22555550'],
};

cliente.enderecos = [{
    rua: 'Rua Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 763'
}];

cliente.enderecos.push({
    rua: 'Joseph Ladder',
    numero: 404,
    apartamento: false,
});

console.log(cliente.enderecos);

console.log(cliente["enderecos"]);