let selectedProduct = "";

function showCategory(id) {
  document.querySelectorAll(".catalog").forEach(section => {
    section.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function openOrder(name, image) {
  selectedProduct = name;

  document.getElementById("orderBox").style.display = "block";
  document.getElementById("orderTitle").textContent = name;
  document.getElementById("orderImage").src = image;

  document.getElementById("version").value = "fan";
  document.getElementById("size").value = "M";
  document.getElementById("patch").checked = false;
  document.getElementById("sponsor").checked = false;
  document.getElementById("custom").checked = false;
  document.getElementById("customFields").style.display = "none";
  document.getElementById("customName").value = "";
  document.getElementById("customNumber").value = "";
  document.getElementById("quantity").value = 1;

  updatePrice();
}

function closeOrder() {
  document.getElementById("orderBox").style.display = "none";
}

function toggleCustom() {
  const custom = document.getElementById("custom").checked;
  document.getElementById("customFields").style.display = custom ? "block" : "none";
  updatePrice();
}

function updatePrice() {
  const version = document.getElementById("version").value;
  const quantity = parseInt(document.getElementById("quantity").value) || 1;

  let itemPrice = version === "fan" ? 18 : 24;

  if (document.getElementById("patch").checked) itemPrice += 1;
  if (document.getElementById("sponsor").checked) itemPrice += 1;
  if (document.getElementById("custom").checked) itemPrice += 3;

  let total = itemPrice * quantity;
  let shipping = quantity >= 3 ? 0 : 4;

  document.getElementById("price").textContent = "Totale: " + total + "€";
  document.getElementById("shipNote").textContent = quantity >= 3
    ? "🎁 Spedizione GRATIS"
    : "🚚 Spedizione 4€";
}

function sendWhatsapp() {
  const version = document.getElementById("version").value === "fan" ? "Fan" : "Player";
  const size = document.getElementById("size").value;
  const quantity = document.getElementById("quantity").value;
  const patch = document.getElementById("patch").checked ? "Sì" : "No";
  const sponsor = document.getElementById("sponsor").checked ? "Sì" : "No";
  const custom = document.getElementById("custom").checked;
  const name = document.getElementById("customName").value;
  const number = document.getElementById("customNumber").value;
  const total = document.getElementById("price").textContent;
  const shipping = document.getElementById("shipNote").textContent;

  let message = "ORDINE GOALWEAR\n";
  message += "Maglia: " + selectedProduct + "\n";
  message += "Versione: " + version + "\n";
  message += "Taglia: " + size + "\n";
  message += "Quantità: " + quantity + "\n";
  message += "Patch: " + patch + "\n";
  message += "Sponsor: " + sponsor + "\n";
  message += "Personalizzazione: " + (custom ? "Sì" : "No") + "\n";

  if (custom) {
    message += "Nome: " + name + "\n";
    message += "Numero: " + number + "\n";
  }

  message += total + "\n";
  message += shipping + "\n";

  window.open("https://wa.me/15164524505?text=" + encodeURIComponent(message), "_blank");
}
