const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
    let nav =document.getElementById('nav')
  if(nav.classList.contains('active')) {
    nav.classList.remove('active')
  } else {
    nav.classList.add('active')
  }

  setTimeout(() => {
    nav.classList.remove('active')
  }, 5000)
 
}


btnMobile.addEventListener('click', toggleMenu);

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


function initTyping() {
    let letter = 0;
    const text = '     Cris Vieira';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".home-nome").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
}

initTyping();


function initTabNav() {
    const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
    const tabContent = document.querySelectorAll("[data-tab='content'] article");
  
    if (tabMenu.length && tabContent.length) {
      tabMenu[1].classList.add("active");
      tabContent[1].classList.add("active");
  
      function activeTab(index) {
        tabContent.forEach((content) => {
          content.classList.remove("active");
        });
        const direction = tabContent[index].dataset.anime;
        tabContent[index].classList.add("active", direction);
  
        tabMenu.forEach((content) => {
          content.classList.remove("active");
        });
        tabMenu[index].classList.add("active");
      }
  
      tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => {
          activeTab(index);
        });
      });
    }
  }
  
  initTabNav();

