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

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('custom').addEventListener('change', updatePrice);
  document.getElementById('patch').addEventListener('change', updatePrice);
  document.getElementById('version').addEventListener('change', updatePrice);
});

function submitOrder(){

  const msg = `ORDINE MAGLIA
Squadra: ${teamTitle.textContent}
Prezzo: ${price.textContent}
Nome: ${fullname.value}
Via: ${via.value}
Città: ${citta.value}
Provincia: ${provincia.value}
CAP: ${cap.value}
Telefono: ${phone.value}`;

  window.open("https://wa.me/15164524505?text="+encodeURIComponent(msg));
}
