const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['115555550', '22555550'],
};

cliente.endereco = {
    rua: 'Rua Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 763'
};

console.log(cliente.endereco);

console.log(cliente["endereco"]);