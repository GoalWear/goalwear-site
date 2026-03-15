function showLeague(id){

document.querySelectorAll(".products").forEach(p => p.style.display="none")

document.getElementById(id).style.display="flex"

}



function selectTeam(name,img){

document.getElementById("formContainer").style.display="block"

document.getElementById("teamTitle").innerText=name

document.getElementById("productImage").src=img

updatePrice()

}



function updatePrice(){

let price=30

if(document.getElementById("custom").checked){

price+=5

document.getElementById("customFields").style.display="block"

}else{

document.getElementById("customFields").style.display="none"

}

price+=parseInt(document.getElementById("patchType").value)

document.getElementById("price").innerText="Prezzo Totale: "+price+"€"

}



document.addEventListener("DOMContentLoaded",()=>{

document.getElementById("custom").addEventListener("change",updatePrice)

document.getElementById("patchType").addEventListener("change",updatePrice)

})



function submitOrder(){

let team=document.getElementById("teamTitle").innerText

let size=document.getElementById("size").value

let custom=document.getElementById("custom").checked

let patch=document.getElementById("patchType").value

let name=document.getElementById("customName").value

let number=document.getElementById("customNumber").value

let fullname=document.getElementById("fullname").value

let address=document.getElementById("address").value

let phone=document.getElementById("phone").value



let price=30

if(custom) price+=5

price+=parseInt(patch)



let message="Ordine Maglia:%0A"

message+="Squadra: "+team+"%0A"

message+="Taglia: "+size+"%0A"

message+="Prezzo: "+price+"€%0A"



if(custom){

message+="Nome: "+name+"%0A"

message+="Numero: "+number+"%0A"

}



message+="Cliente: "+fullname+"%0A"

message+="Indirizzo: "+address+"%0A"

message+="Telefono: "+phone



let url="https://wa.me/15164524505?text="+message

window.open(url)

}
