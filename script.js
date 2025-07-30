const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // Opcional: fechar menu ao clicar em algum link
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    });
  });





  
let closedManually = false;

  function showPopup() {
    if (!closedManually) {
      const popup = document.getElementById("whatsapp-popup");
      popup.style.display = "flex";
      popup.classList.add("show");
    }
  }

  // Mostrar o popup após 3s ao carregar a página
  setTimeout(showPopup, 3000);

  function closePopup() {
    const popup = document.getElementById("whatsapp-popup");
    popup.style.display = "none";
    popup.classList.remove("show");

    closedManually = true;

    // Reaparece após 10 segundos
    setTimeout(() => {
      closedManually = false;
      showPopup();
    }, 10000);
  }

