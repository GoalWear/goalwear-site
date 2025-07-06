
let selectedTeam = "";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("custom").addEventListener("change", function () {
    document.getElementById("customFields").style.display = this.checked ? "block" : "none";
    document.getElementById("price").textContent = this.checked ? "Prezzo Totale: 35€" : "Prezzo Totale: 30€";
  });
});

function showLeague(leagueId) {
  document.querySelectorAll(".league-section").forEach(sec => sec.style.display = "none");
  document.getElementById(leagueId).style.display = "flex";
  document.getElementById("formContainer").style.display = "none";
}

function selectTeam(team, imagePath) {
  selectedTeam = team;
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("teamTitle").textContent = "Maglia " + team;
  document.getElementById("productImage").src = imagePath;
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

  let message = `Nuovo ordine:\n` +
    `Squadra: ${selectedTeam}\n` +
    `Taglia: ${size}\n` +
    `Personalizzazione: ${isCustom ? "Sì" : "No"}\n`;
  if (isCustom) {
    message += `Nome: ${customName}\nNumero: ${customNumber}\n`;
  }
  message += `Totale: ${total}€\n` +
    `Nome cliente: ${fullname}\n` +
    `Indirizzo: ${address}\n` +
    `Email: ${email}\n` +
    `Telefono: ${phone}\n` +
    `Metodo: da concordare su WhatsApp`;

  const url = "https://wa.me/+15164524505?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
