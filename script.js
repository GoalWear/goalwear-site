function showLeague(id){
  document.querySelectorAll('.league-section').forEach(s => s.style.display='none');
  document.getElementById(id).style.display='flex';
}

function selectTeam(name,img){
  document.getElementById('formContainer').style.display='block';
  document.getElementById('teamTitle').textContent=name;
  document.getElementById('productImage').src=img;

  document.getElementById('custom').checked=false;
  document.getElementById('patch').checked=false;

  updatePrice();
}

function updatePrice(){
  let price = document.getElementById('version').value === 'fan' ? 18 : 24;

  const custom = document.getElementById('custom');
  const patch = document.getElementById('patch');

  if(custom.checked){
    price += 5;
    document.getElementById('customFields').style.display='block';
  } else {
    document.getElementById('customFields').style.display='none';
  }

  if(patch.checked){
    price += 1;
  }

  document.getElementById('price').textContent = "Prezzo: " + price + "€";
}

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('custom').addEventListener('change', updatePrice);
  document.getElementById('patch').addEventListener('change', updatePrice);
  document.getElementById('version').addEventListener('change', updatePrice);
});

function submitOrder(){

  const teamTitle = document.getElementById('teamTitle').textContent;
  const price = document.getElementById('price').textContent;

  const fullname = document.getElementById('fullname').value;
  const via = document.getElementById('via').value;
  const citta = document.getElementById('citta').value;
  const provincia = document.getElementById('provincia').value;
  const cap = document.getElementById('cap').value;
  const phone = document.getElementById('phone').value;

  if(!fullname || !via || !citta || !provincia || !cap || !phone){
    alert("Compila tutti i campi!");
    return;
  }

  let msg = `ORDINE MAGLIA\n`;
  msg += `Squadra: ${teamTitle}\n`;
  msg += `Prezzo: ${price}\n`;
  msg += `Nome: ${fullname}\n`;
  msg += `Via: ${via}\n`;
  msg += `Città: ${citta}\n`;
  msg += `Provincia: ${provincia}\n`;
  msg += `CAP: ${cap}\n`;
  msg += `Telefono: ${phone}\n`;

  window.open("https://wa.me/15164524505?text="+encodeURIComponent(msg));
}
