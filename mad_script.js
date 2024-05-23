/* -------------------------
        KAFFE MODAL
---------------------------*/

// Vi finder hele kaffemodalen i HTML
const kaffeModal = document.getElementById("mad_kaffe_modal");

// Vi finder kaffe knappen (billedet af kaffeknappen)
const kaffeKnap = document.getElementById("mad_kaffeimg_knap");

// Vi finder <span> element som lukker Kaffe modal
const lukKaffeModal = document.getElementById("lukknap_kaffe_modal");

// Når man klikker på knappen, åbner kaffemodalen 
kaffeKnap.onclick = function() {
    kaffeModal.style.display = "block";
}

// Når man klikker på <span> (x / lukknap), lukker modalen
lukKaffeModal.onclick = function() {
  kaffeModal.style.display = "none";
}


/* -------------------------
        BAGVÆRK MODAL
---------------------------*/

// Vi finder hele bagværkmodalen i HTML
const bagvaerkModal = document.getElementById("mad_bagvaerk_modal");

// Vi finder bagværk knappen (billedet af bagværkknappen)
const bagvaerkKnap = document.getElementById("mad_bagimg_knap");

// Vi finder <span> element som lukker bagværk modal
const lukBagvaerkModal = document.getElementById("lukknap_bagvaerk_modal");

// Når man klikker på knappen, åbner bagværkmodalen 
bagvaerkKnap.onclick = function() {
    bagvaerkModal.style.display = "block";
}

// Når man klikker på <span> (x / lukknap), lukker modalen
lukBagvaerkModal.onclick = function() {
  bagvaerkModal.style.display = "none";
}




