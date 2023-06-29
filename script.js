function arrastaHome(){
    window.scrollTo({ left: 0, top: document.body.scrollTop, behavior: "smooth",});
}

function arrastaProducts(){
    window.scrollTo({ left: 0, top: 870, behavior: "smooth",});
}

function arrastaRecipes(){
    window.scrollTo({ left: 0, top: 1820, behavior: "smooth",});
}

function arrastaAboutUs(){
    window.scrollTo({ left: 0, top: 2620, behavior: "smooth",});
}

function arrastaFooter(){
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth",});
}

function reveal() {
    var reveals = document.querySelectorAll(".revelar");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);