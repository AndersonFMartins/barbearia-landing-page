document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {

    e.preventDefault()

    const targetId = this.getAttribute('href')

    const targetSection = document.querySelector(targetId)

    targetSection.scrollIntoView({
      behavior: 'smooth'
    })

  })
})
const form = document.getElementById("form-contato");

form.addEventListener("submit", function(event){

  event.preventDefault(); 

  alert("Mensagem enviada com sucesso!");

});