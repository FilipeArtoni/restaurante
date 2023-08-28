function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var num = document.getElementById("numero").value;
    var msg = document.getElementById("mensagem").value;
    var url = "https://wa.me/5513982027249?text=" // Seu numero
      + "*Reserva de Mesa*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*E-mail*: " + email + "%0a"
      + "*Número*: " + num + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
}