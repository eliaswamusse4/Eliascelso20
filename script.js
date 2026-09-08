// ===================== MENU MÓVEL (☰) =====================
// Ao clicar no botão ☰, mostra ou esconde o menu de navegação
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("aberto");
});

// Fecha o menu automaticamente quando um link é clicado (útil no telemóvel)
const linksNav = nav.querySelectorAll("a");
linksNav.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("aberto");
  });
});

// ===================== ANO AUTOMÁTICO NO RODAPÉ =====================
// Escreve o ano atual dentro do <span id="ano"> do rodapé
const anoAtual = new Date().getFullYear();
document.getElementById("ano").textContent = anoAtual;

// ===================== ROLAGEM SUAVE (SCROLL) =====================
// Faz a página deslizar suavemente até a secção clicada no menu
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (evento) => {
    const destino = document.querySelector(link.getAttribute("href"));
    if (destino) {
      evento.preventDefault();
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});
