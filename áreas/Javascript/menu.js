
window.addEventListener("scroll", function () {
  let head = document.querySelector('#header')
  head.classList.toggle('rolagem', window.scrollY > 300)
})

function redirectToChat(farmerName) {
    // Redireciona para a página de chat com o nome do agricultor como parâmetro
    window.location.href = `chat/Index.html?farmer=${encodeURIComponent(farmerName)}`;
}

function exibir2() {
    document.getElementById("contatos").style.display = "block";
        }