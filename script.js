
let selectedTeam = "";
let imageMap = {
  "Milan": "assets/milan.png",
  "Inter": "assets/inter.png",
  "Juventus": "assets/juventus.png"
};

document.addEventListener("DOMContentLoaded", function () {
  const custom = document.getElementById("custom");
  custom.addEventListener("change", function () {
    document.getElementById("customFields").style.display = this.checked ? "block" : "none";
    document.getElementById("price").textContent = this.checked ? "Prezzo Totale: 35€" : "Prezzo Totale: 30€";
  });
});

function selectTeam(team, image) {
  selectedTeam = team;
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("teamTitle").textContent = "Maglia " + team;
  document.getElementById("productImage").src = "assets/" + image;
}

function submitOrder() {
  const size = document.getElementById("size").value;
  const isCustom = document.getElementById("custom").checked;
  const customName = document.getElementById("customName").value;
  const customNumber = document.getElementById("customNumber").value;
  const fullname = document.getElementById("fullname").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const total = isCustom ? 35 : 30;

  let message = `Nuovo ordine:%0A
Squadra: ${selectedTeam}%0A
Taglia: ${size}%0A
Personalizzazione: ${isCustom ? "Sì" : "No"}%0A`;
  if (isCustom) {
    message += `Nome: ${customName}%0ANumero: ${customNumber}%0A`;
  }
  message += `Totale: ${total}€%0A
Nome cliente: ${fullname}%0A
Indirizzo: ${address}%0A
Email: ${email}%0A
Telefono: ${phone}%0A
Metodo: da concordare su WhatsApp`;

  const url = "https://wa.me/+15164524505?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
