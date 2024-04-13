document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    if (nome && email && telefone) {
        // Aqui você pode enviar os dados para o backend ou realizar outras ações, como exibir uma mensagem de sucesso.
        document.getElementById('mensagem').innerText = "Cadastro realizado com sucesso!";
        document.getElementById('cadastroForm').reset();
    } else {
        document.getElementById('mensagem').innerText = "Por favor, preencha todos os campos.";
    }
});