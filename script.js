function showLeague(leagueId) {
  const sections = document.querySelectorAll('.league-section');
  sections.forEach(section => (section.style.display = 'none'));
  document.getElementById(leagueId).style.display = 'flex';
}

function selectTeam(teamName, imgSrc) {
  document.getElementById('formContainer').style.display = 'block';
  document.getElementById('teamTitle').textContent = teamName;
  document.getElementById('productImage').src = imgSrc;

  // Reset form fields
  document.getElementById('custom').checked = false;
  document.getElementById('patch').checked = false;
  document.getElementById('customFields').style.display = 'none';
  document.getElementById('customName').value = '';
  document.getElementById('customNumber').value = '';
  document.getElementById('size').value = 'M';
  document.getElementById('payment').value = 'Bonifico';
  document.getElementById('price').textContent = 'Prezzo Totale: 30€';
}

function updatePrice() {
  let price = 30;

  const custom = document.getElementById('custom').checked;
  const patch = document.getElementById('patch').checked;

  if (custom) {
    price += 5;
    document.getElementById('customFields').style.display = 'block';
  } else {
    document.getElementById('customFields').style.display = 'none';
  }

  if (patch) {
    price += 2;
  }

  document.getElementById('price').textContent = 'Prezzo Totale: ' + price + '€';
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('custom').addEventListener('change', updatePrice);
  document.getElementById('patch').addEventListener('change', updatePrice);
});

function submitOrder() {
  const teamName = document.getElementById('teamTitle').textContent;
  const size = document.getElementById('size').value;
  const payment = document.getElementById('payment').value;
  const fullname = document.getElementById('fullname').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;

  const custom = document.getElementById('custom').checked;
  const patch = document.getElementById('patch').checked;

  const customName = document.getElementById('customName').value;
  const customNumber = document.getElementById('customNumber').value;

  let price = 30;
  if (custom) price += 5;
  if (patch) price += 2;

  if (!fullname || !address || !phone) {
    alert('Per favore, compila tutti i campi obbligatori.');
    return;
  }

  let message = `Ordine Maglia:%0A`;
  message += `Squadra: ${teamName}%0A`;
  message += `Taglia: ${size}%0A`;
  message += `Prezzo: ${price}€%0A`;
  message += `Metodo di pagamento: ${payment}%0A`;
  message += `Nome e Cognome: ${fullname}%0A`;
  message += `Indirizzo: ${address}%0A`;
  message += `Telefono: ${phone}%0A`;

  message += `Personalizzazione: ${custom ? "Sì" : "No"}%0A`;

  if (custom) {
    message += `Nome sulla maglia: ${customName}%0A`;
    message += `Numero sulla maglia: ${customNumber}%0A`;
  }

  message += `Patch: ${patch ? "Sì (+2€)" : "No"}%0A`;

  const phoneNumber = '15164524505';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
window.open(whatsappUrl, '_blank');
}
