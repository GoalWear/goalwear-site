/* =========================================================
   GOALWEAR 2026/27
   JAVASCRIPT
========================================================= */


/* ================= VARIABILI ================= */

let selectedTeam = "";


/* =========================================================
   AVVIO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /*
    Nasconde inizialmente tutte le sezioni
    dei campionati.
  */

  document
    .querySelectorAll(".league-section")
    .forEach(function (section) {

      section.style.display = "none";

    });


  /*
    Gestione personalizzazione
  */

  const customCheckbox =
    document.getElementById("custom");

  customCheckbox.addEventListener(
    "change",
    function () {

      const customFields =
        document.getElementById("customFields");

      const price =
        document.getElementById("price");


      if (this.checked) {

        customFields.classList.add("active");

        price.textContent = "35€";

      } else {

        customFields.classList.remove("active");

        price.textContent = "30€";

      }

    }
  );


  /*
    Avvia countdown
  */

  updateCountdown();

  setInterval(updateCountdown, 1000);

});


/* =========================================================
   CAMBIO CAMPIONATO
========================================================= */

function showLeague(leagueId) {

  /*
    Nasconde tutte le categorie
  */

  document
    .querySelectorAll(".league-section")
    .forEach(function (section) {

      section.style.display = "none";

      section.classList.remove("active");

    });


  /*
    Mostra quella selezionata
  */

  const selectedLeague =
    document.getElementById(leagueId);


  if (selectedLeague) {

    selectedLeague.style.display = "block";

    selectedLeague.classList.add("active");

  }


  /*
    Nasconde il modulo ordine
    quando si cambia campionato.
  */

  document.getElementById(
    "formContainer"
  ).style.display = "none";


  /*
    Porta l'utente verso la sezione prodotti.
  */

  window.scrollTo({
    top: selectedLeague.offsetTop - 20,
    behavior: "smooth"
  });

}


/* =========================================================
   SELEZIONE MAGLIA
========================================================= */

function selectTeam(teamName, imagePath) {

  selectedTeam = teamName;


  /*
    Aggiorna titolo
  */

  document.getElementById(
    "teamTitle"
  ).textContent = "Maglia " + teamName;


  /*
    Aggiorna immagine
  */

  document.getElementById(
    "productImage"
  ).src = imagePath;


  /*
    Mostra form
  */

  const formContainer =
    document.getElementById("formContainer");

  formContainer.style.display = "block";


  /*
    Reset personalizzazione
  */

  document.getElementById(
    "custom"
  ).checked = false;

  document.getElementById(
    "customFields"
  ).classList.remove("active");

  document.getElementById(
    "customName"
  ).value = "";

  document.getElementById(
    "customNumber"
  ).value = "";


  /*
    Reset prezzo
  */

  document.getElementById(
    "price"
  ).textContent = "30€";


  /*
    Reset metodo pagamento
  */

  document.getElementById(
    "payment"
  ).value = "";


  /*
    Porta l'utente al modulo.
  */

  setTimeout(function () {

    formContainer.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 100);

}


/* =========================================================
   COUNTDOWN SERIE A
========================================================= */

function updateCountdown() {

  /*
    Data di inizio Serie A:

    22 agosto 2026
    ore 18:30
    ora italiana

    +02:00 = CEST
  */

  const targetDate =
    new Date(
      "2026-08-22T18:30:00+02:00"
    ).getTime();


  const now =
    new Date().getTime();


  const difference =
    targetDate - now;


  /*
    Se il countdown è terminato
  */

  if (difference <= 0) {

    document.getElementById(
      "countdown"
    ).style.display = "none";


    document.getElementById(
      "countdownStarted"
    ).style.display = "block";


    return;

  }


  /*
    Calcolo tempo
  */

  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );


  const hours =
    Math.floor(
      (difference /
        (1000 * 60 * 60)) % 24
    );


  const minutes =
    Math.floor(
      (difference /
        (1000 * 60)) % 60
    );


  const seconds =
    Math.floor(
      (difference / 1000) % 60
    );


  /*
    Aggiorna HTML
  */

  document.getElementById(
    "days"
  ).textContent =
    String(days).padStart(2, "0");


  document.getElementById(
    "hours"
  ).textContent =
    String(hours).padStart(2, "0");


  document.getElementById(
    "minutes"
  ).textContent =
    String(minutes).padStart(2, "0");


  document.getElementById(
    "seconds"
  ).textContent =
    String(seconds).padStart(2, "0");

}


/* =========================================================
   INVIO ORDINE WHATSAPP
========================================================= */

function submitOrder() {

  /*
    Recupera dati
  */

  const size =
    document.getElementById(
      "size"
    ).value;


  const isCustom =
    document.getElementById(
      "custom"
    ).checked;


  const customName =
    document.getElementById(
      "customName"
    ).value.trim();


  const customNumber =
    document.getElementById(
      "customNumber"
    ).value.trim();


  const fullname =
    document.getElementById(
      "fullname"
    ).value.trim();


  const address =
    document.getElementById(
      "address"
    ).value.trim();


  const email =
    document.getElementById(
      "email"
    ).value.trim();


  const phone =
    document.getElementById(
      "phone"
    ).value.trim();


  const payment =
    document.getElementById(
      "payment"
    ).value;


  const total =
    isCustom ? 35 : 30;


  /* =====================================================
     CONTROLLI
  ===================================================== */


  if (!selectedTeam) {

    alert(
      "Seleziona prima una maglia."
    );

    return;

  }


  if (!size) {

    alert(
      "Seleziona una taglia."
    );

    return;

  }


  if (isCustom) {

    if (!customName) {

      alert(
        "Inserisci il nome da mettere sulla maglia."
      );

      document.getElementById(
        "customName"
      ).focus();

      return;

    }


    if (!customNumber) {

      alert(
        "Inserisci il numero da mettere sulla maglia."
      );

      document.getElementById(
        "customNumber"
      ).focus();

      return;

    }

  }


  if (!payment) {

    alert(
      "Seleziona il metodo di pagamento."
    );

    document.getElementById(
      "payment"
    ).focus();

    return;

  }


  if (!fullname) {

    alert(
      "Inserisci Nome e Cognome."
    );

    document.getElementById(
      "fullname"
    ).focus();

    return;

  }


  if (!address) {

    alert(
      "Inserisci l'indirizzo completo."
    );

    document.getElementById(
      "address"
    ).focus();

    return;

  }


  if (!email) {

    alert(
      "Inserisci la tua email."
    );

    document.getElementById(
      "email"
    ).focus();

    return;

  }


  if (!phone) {

    alert(
      "Inserisci il tuo numero di telefono."
    );

    document.getElementById(
      "phone"
    ).focus();

    return;

  }


  /* =====================================================
     CREAZIONE MESSAGGIO
  ===================================================== */


  let message =
    "⚽ NUOVO ORDINE GOALWEAR\n\n";


  message +=
    "👕 MAGLIA\n";

  message +=
    `Squadra: ${selectedTeam}\n`;

  message +=
    `Taglia: ${size}\n`;


  message +=
    `Personalizzazione: ${
      isCustom ? "Sì" : "No"
    }\n`;


  if (isCustom) {

    message +=
      `Nome maglia: ${customName}\n`;

    message +=
      `Numero maglia: ${customNumber}\n`;

  }


  message +=
    "\n💶 PAGAMENTO\n";

  message +=
    `Totale: ${total}€\n`;

  message +=
    `Metodo: ${payment}\n`;


  message +=
    "\n📦 DATI CLIENTE\n";

  message +=
    `Nome: ${fullname}\n`;

  message +=
    `Indirizzo: ${address}\n`;

  message +=
    `Email: ${email}\n`;

  message +=
    `Telefono: ${phone}\n`;


  message +=
    "\n✅ Inviato dal sito GoalWear";


  /* =====================================================
     WHATSAPP
  ===================================================== */

  /*
    Manteniamo il numero WhatsApp
    presente nel tuo sito originale.
  */

  const whatsappNumber =
    "15164524505";


  const whatsappUrl =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);


  window.open(
    whatsappUrl,
    "_blank"
  );

}
