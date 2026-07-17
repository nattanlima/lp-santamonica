// Ano corrente no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// FAQ: abrir um item fecha os demais (mesmo comportamento do acordeão original)
const itens = document.querySelectorAll('.faq__item');
itens.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    itens.forEach((outro) => {
      if (outro !== item) outro.open = false;
    });
  });
});
