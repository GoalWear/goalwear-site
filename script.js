function showLeague(id){
  document.querySelectorAll('.league-section').forEach(s=>s.style.display='none');
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

  if(document.getElementById('custom').checked){
    price += 5;
    document.getElementById('customFields').style.display='block';
  } else {
    document.getElementById('customFields').style.display='none';
  }

  if(document.getElementById('patch').checked){
    price += 1;
  }

  document.getElementById('price').textContent = "Prezzo: " + price + "€";
}

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById('custom').addEventListener('change',updatePrice);
  document.getElementById('patch').addEventListener('change',updatePrice);
  document.getElementById('version').addEventListener('change',updatePrice);
});

function submitOrder(){
  let price = document.getElementById('price').textContent;

  let msg = `ORDINE MAGLIA\n`;
  msg += `Squadra: ${teamTitle.textContent}\n`;
  msg += `Prezzo: ${price}\n`;
  msg += `Nome: ${fullname.value}\n`;
  msg += `Via: ${via.value}\n`;
  msg += `Città: ${citta.value}\n`;
  msg += `Provincia: ${provincia.value}\n`;
  msg += `CAP: ${cap.value}\n`;
  msg += `Telefono: ${phone.value}\n`;

  window.open("https://wa.me/15164524505?text="+encodeURIComponent(msg));
}
