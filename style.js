$(document).ready(function(){
    // Máscara para CPF
    $('#cpf').mask('000.000.000-00', {reverse: true});
    // Máscara para telefone
    $('#telefone').mask('(00) 00000-0000');
    // Máscara para CEP
    $('#cep').mask('00000-000');
    
    // Validação do formulário
    $('form').submit(function(){
        let nome = $('#nome_completo').val();
        let email = $('#email').val();
        let telefone = $('#telefone').val();
        let cpf = $('#cpf').val();
        let endereco = $('#endereco').val();
        let cep = $('#cep').val();
        
        // Verifica se todos os campos foram preenchidos
        if(nome == '' || email == '' || telefone == '' || cpf == '' || endereco == '' || cep == '') {
            alert('Por favor, preencha todos os campos.');
            return false; // Impede o envio do formulário se algum campo estiver vazio
        }
    });
});