
let selectedTeam = "";
let imageMap = {
  "Milan": "assets/https://store.acmilan.com/cdn/shop/files/779961-A81_01_e71884e7-a5e6-49d4-9098-1ea4f5228f62.jpg?v=1747892863&width=770",
  "Inter": "assets/https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/274091a3-e04b-4181-a278-4e20a7a3ee21/INTER+M+NK+DF+JSY+SS+STAD+HM.png",
  "Juventus": "assets/https://store.juventus.com/images/juventus/customizations/patch-overlay/20250513103249.webp"
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
