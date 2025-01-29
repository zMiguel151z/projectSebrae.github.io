
window.addEventListener("scroll", function () {
  let head = document.querySelector('#header')
  head.classList.toggle('rolagem', window.scrollY > 300)
})