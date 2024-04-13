document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const metal = document.getElementById('metal').value;
    const observacao = document.getElementById('observacao').value;

    const data = {
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        email: email,
        metal: metal,
        observacao: observacao
    };

    fetch('/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            document.getElementById('cadastroForm').reset();
        } else {
            alert('Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});