const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
    const nav =document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 200 * i)
    });
}

const title = document.querySelector('span.home-nome');

typeWriter(title);


const menuItems = document.querySelectorAll('#menu a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
   return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event){
    event.preventDefault();
   const to = getScrollTopByHref(event.target) - 90;

   scrollToPosition(to)
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
      })
}

