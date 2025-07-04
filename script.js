
const customCheckbox = document.getElementById("custom");
const priceText = document.getElementById("price");
customCheckbox.addEventListener("change", () => {
  const total = customCheckbox.checked ? 35 : 30;
  priceText.textContent = `Prezzo Totale: ${total}€`;
});

function getOrderData() {
  const team = document.getElementById("team").value;
  const size = document.getElementById("size").value;
  const isCustom = document.getElementById("custom").checked;
  const name = document.getElementById("fullname").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const total = isCustom ? 35 : 30;

  return {
    team, size, isCustom, name, address, email, phone, total
  };
}

function payRevolut() {
  window.open("https://revolut.me/francescodelia1", "_blank");
}

function payPayPal() {
  alert("Invia il pagamento PayPal a: goalwear6@gmail.com");
}

function payAmazon() {
  const data = getOrderData();
  const message = `Nuovo ordine GOALWEAR:%0A
Squadra: ${data.team}%0ATaglia: ${data.size}%0A
Personalizzazione: ${data.isCustom ? "Sì" : "No"}%0A
Totale: ${data.total}€%0A
Nome: ${data.name}%0AIndirizzo: ${data.address}%0A
Email: ${data.email}%0ATelefono: ${data.phone}%0A
Metodo: Buono Amazon`;
  window.open("https://wa.me/+15164524505?text=" + encodeURIComponent(message), "_blank");
}
