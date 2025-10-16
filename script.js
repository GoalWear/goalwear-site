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
  document.getElementById('customFields').style.display = 'none';
  document.getElementById('customName').value = '';
  document.getElementById('customNumber').value = '';
  document.getElementById('size').value = 'M';
  document.getElementById('payment').value = 'Bonifico';
  document.getElementById('price').textContent = 'Prezzo Totale: 30€';
}

document.getElementById('custom').addEventListener('change', function() {
  const customFields = document.getElementById('customFields');
  const priceField = document.getElementById('price');
  if (this.checked) {
    customFields.style.display = 'block';
    priceField.textContent = 'Prezzo Totale: 35€';
  } else {
    customFields.style.display = 'none';
    priceField.textContent = 'Prezzo Totale: 30€';
  }
});

function submitOrder() {
  const teamName = document.getElementById('teamTitle').textContent;
  const size = document.getElementById('size').value;
  const payment = document.getElementById('payment').value;
  const fullname = document.getElementById('fullname').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const custom = document.getElementById('custom').checked;
  const customName = document.getElementById('customName').value;
  const customNumber = document.getElementById('customNumber').value;
  const price = custom ? '35€' : '30€';

  if (!fullname || !address || !email || !phone) {
    alert('Per favore, compila tutti i campi obbligatori.');
    return;
  }

  let message = `Ordine Maglia:%0A`;
  message += `Squadra: ${teamName}%0A`;
  message += `Taglia: ${size}%0A`;
  message += `Prezzo: ${price}%0A`;
  message += `Metodo di pagamento: ${payment}%0A`;
  message += `Nome e Cognome: ${fullname}%0A`;
  message += `Indirizzo: ${address}%0A`;
  message += `Email: ${email}%0A`;
  message += `Telefono: ${phone}%0A`;

  if (custom) {
    message += `Personalizzazione: Sì%0A`;
    message += `Nome: ${customName}%0A`;
    message += `Numero: ${customNumber}%0A`;
  } else {
    message += `Personalizzazione: No%0A`;
  }

  const phoneNumber = '393517290437'; // Numero WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}
