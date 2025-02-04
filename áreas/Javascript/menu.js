
window.addEventListener("scroll", function () {
  let head = document.querySelector('#header')
  head.classList.toggle('rolagem', window.scrollY > 300)
})

function redirectToChat(farmerName) {
    // Redireciona para a página de chat com o nome do agricultor como parâmetro
    window.location.href = `chat/Index.html?farmer=${encodeURIComponent(farmerName)}`;
}
function redirectToperfil(farmerName) {
    // Redireciona para a página do perfil com o nome do agricultor como parâmetro
    window.location.href = `Perfil.html?farmer=${encodeURIComponent(farmerName)}`;
}

function exibir1() {
    document.getElementById("trabalhos").style.display = "block";
    document.getElementById("contatos").style.display = "none";
    document.getElementById("Perfil").style.display = "none";
    document.getElementById("contatos2").style.display = "none";
    document.getElementById("Empresas2").style.display = "none";
        }
function exibir2() {
    document.getElementById("contatos").style.display = "block";
    document.getElementById("trabalhos").style.display = "none";
    document.getElementById("Perfil").style.display = "none";
    document.getElementById("contatos2").style.display = "none";
    document.getElementById("Empresas2").style.display = "none";
        }
function exibir3() {
    document.getElementById("Perfil").style.display = "block";
    document.getElementById("trabalhos").style.display = "none";
    document.getElementById("contatos").style.display = "none";
    document.getElementById("contatos2").style.display = "none";
    document.getElementById("Empresas2").style.display = "none";
        }
function exibir4() {
    document.getElementById("contatos2").style.display = "block";
        }
function exibir5() {
    document.getElementById("Empresas2").style.display = "block";
        }
