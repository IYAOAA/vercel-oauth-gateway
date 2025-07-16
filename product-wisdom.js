const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("product-wisdom.json")
  .then(res => res.json())
  .then(data => {
    const product = data.find(p => p.id === id);
    if (!product) {
      document.getElementById("wisdom-title").textContent = "Wisdom not found.";
      return;
    }

    document.getElementById("wisdom-title").textContent = product.title;
    document.getElementById("wellness-hook").textContent = product.wellness_hook;
    document.getElementById("how-to-use").textContent = product.how_to_use;
    document.getElementById("bonus-tip").textContent = product.bonus_tip;
    document.getElementById("good-for").textContent = product.good_for;
    document.getElementById("buy-link").href = product.buy_link;
  });