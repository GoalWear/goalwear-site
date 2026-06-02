let selectedProduct = "";
let orderMode = "world";

function showCategory(id) {
  document.querySelectorAll(".catalog").forEach(section => {
    section.classList.remove("active");
  });

  const selected = document.getElementById(id);

  if (selected) {
    selected.classList.add("active");
  }

  closeOrder();
}

function openWorldOrder(name, image, size, playerName, playerNumber, patches) {
  orderMode = "world";
  selectedProduct = name;

  document.getElementById("orderBox").style.display = "block";
  document.getElementById("orderTitle").textContent = name;
  document.getElementById("orderImage").src = image;

  document.getElementById("worldInfo").style.display = "block";
  document.getElementById("normalOptions").style.display = "none";

  document.getElementById("size").value = size;
  document.getElementById("customFields").style.display = "block";
  document.getElementById("customName").value = playerName;
  document.getElementById("customNumber").value = playerNumber;
  document.getElementById("quantity").value = 1;

  const patchBox = document.getElementById("orderPatches");
  patchBox.innerHTML = "";

  patches.forEach(patchImg => {
    const img = document.createElement("img");
    img.src = patchImg;
    img.alt = "Patch";
    patchBox.appendChild(img);
  });

  updatePrice();
}

function openNormalOrder(name, image) {
  orderMode = "normal";
  selectedProduct = name;

  document.getElementById("orderBox").style.display = "block";
  document.getElementById("orderTitle").textContent = name;
  document.getElementById("orderImage").src = image;

  document.getElementById("worldInfo").style.display = "none";
  document.getElementById("normalOptions").style.display = "block";

  document.getElementById("version").value = "fan";
  document.getElementById("size").value = "M";
  document.getElementById("patch").checked = false;
  document.getElementById("sponsor").checked = false;
  document.getElementById("custom").checked = false;

  document.getElementById("customFields").style.display = "none";
  document.getElementById("customName").value = "";
  document.getElementById("customNumber").value = "";
  document.getElementById("quantity").value = 1;

  document.getElementById("orderPatches").innerHTML = "";

  updatePrice();
}

function closeOrder() {
  const box = document.getElementById("orderBox");

  if (box) {
    box.style.display = "none";
  }
}

function toggleCustom() {
  const custom = document.getElementById("custom").checked;

  document.getElementById("customFields").style.display = custom ? "block" : "none";

  updatePrice();
}

function updatePrice() {
  const quantity = parseInt(document.getElementById("quantity").value) || 1;

  let itemPrice = 0;

  if (orderMode === "world") {
    itemPrice = 20;
  } else {
    const version = document.getElementById("version").value;

    itemPrice = version === "fan" ? 18 : 24 : 26;

    if (document.getElementById("patch").checked) {
      itemPrice += 1;
    }

    if (document.getElementById("sponsor").checked) {
      itemPrice += 1;
    }

    if (document.getElementById("custom").checked) {
      itemPrice += 3;
    }
  }

  const total = itemPrice * quantity;

  document.getElementById("price").textContent = "Totale: " + total + "€";

  document.getElementById("shipNote").textContent =
    quantity >= 3 ? "🎁 Spedizione GRATIS" : "🚚 Spedizione 4€";
}

function sendWhatsapp() {
  const size = document.getElementById("size").value;
  const quantity = document.getElementById("quantity").value;
  const total = document.getElementById("price").textContent;
  const shipping = document.getElementById("shipNote").textContent;
  const name = document.getElementById("customName").value;
  const number = document.getElementById("customNumber").value;

  let message = "ORDINE GOALWEAR\n";
  message += "Maglia: " + selectedProduct + "\n";
  message += "Taglia: " + size + "\n";
  message += "Quantità: " + quantity + "\n";

  if (orderMode === "world") {
    message += "Categoria: Mondiale 2026\n";
    message += "Versione: Fan\n";
    message += "Patch: Incluse\n";
    message += "Personalizzazione: Inclusa\n";
    message += "Nome: " + name + "\n";
    message += "Numero: " + number + "\n";
    message += "Prezzo unitario: 20€\n";
  } else {
    const version = document.getElementById("version").value === "fan" ? "Fan" : "Player" : "Maglia + Pantaloncini";
    const patch = document.getElementById("patch").checked ? "Sì" : "No";
    const sponsor = document.getElementById("sponsor").checked ? "Sì" : "No";
    const custom = document.getElementById("custom").checked;

    message += "Versione: " + version + "\n";
    message += "Patch: " + patch + "\n";
    message += "Sponsor: " + sponsor + "\n";
    message += "Personalizzazione: " + (custom ? "Sì" : "No") + "\n";

    if (custom) {
      message += "Nome: " + name + "\n";
      message += "Numero: " + number + "\n";
    }
  }

  message += total + "\n";
  message += shipping + "\n";

  window.open("https://wa.me/15164524505?text=" + encodeURIComponent(message), "_blank");
}
