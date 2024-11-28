$(document).ready(function() {
    // Máscara para o campo de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação de e-mail em tempo real
    $('#email').on('input', function() {
        var email = $(this).val();
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    });

    // Nome deve conter apenas letras e espaços
    $('#nome').on('input', function() {
        this.value = this.value.replace(/[^A-Za-z\s]/g, '');
    });

    // Função de validação ao enviar o formulário
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário, caso haja erros
        let isValid = true;

        // Validar o campo Nome
        const nome = $('#nome').val().trim();
        if (nome === "") {
            $('#nome').addClass('is-invalid');
            isValid = false;
        } else {
            $('#nome').removeClass('is-invalid');
        }

        // Validar o campo Telefone
        const telefone = $('#telefone').val().trim();
        if (!telefone.match(/^\(\d{2}\) \d{5}-\d{4}$/)) { // Verifica se o telefone está completo
            $('#telefone').addClass('is-invalid');
            isValid = false;
        } else {
            $('#telefone').removeClass('is-invalid');
        }

        // Validar o campo E-mail
        const email = $('#email').val().trim();
        if (email === "" || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        } else {
            $('#email').removeClass('is-invalid');
        }

        // Validar o campo Mensagem
        const mensagem = $('#mensagem').val().trim();
        if (mensagem === "") {
            $('#mensagem').addClass('is-invalid');
            isValid = false;
        } else {
            $('#mensagem').removeClass('is-invalid');
        }

        // Exibir *toast* com base na validade
        const toastSuccess = new bootstrap.Toast(document.getElementById('toast-success'));
        const toastError = new bootstrap.Toast(document.getElementById('toast-error'));

        if (isValid) {
            toastSuccess.show(); // Mostra o toast de sucesso
        } else {
            toastError.show(); // Mostra o toast de erro
        }
    });
});