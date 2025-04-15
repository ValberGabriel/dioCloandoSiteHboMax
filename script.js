// Animação ao enviar formulário de login
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
      });
    }
  
    // Hover de perspectiva mais fluído
    const perspectiveCards = document.querySelectorAll('.perspective');
    perspectiveCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const x = offsetX / target.clientWidth - 0.5;
        const y = offsetY / target.clientHeight - 0.5;
        target.style.transform = `perspective(800px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
      });
  
      card.addEventListener('mouseleave', (e) => {
        e.target.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
      });
    });
  });
  // ᴗ̈ valberg.
