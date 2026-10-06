// =====================================
// ANIMACIÓN DE LA TARJETA PRESETS
// AlberthBass
// =====================================

const presetsCard = document.getElementById("presetsCard");

if (presetsCard) {

  // Cuando el mouse entra en la tarjeta
  presetsCard.addEventListener("pointerenter", (event) => {

    if (event.pointerType === "mouse" || event.pointerType === "pen") {
      presetsCard.classList.add("imagen-activa");
    }

  });

  // Cuando el mouse sale de la tarjeta
  presetsCard.addEventListener("pointerleave", () => {

    presetsCard.classList.remove("imagen-activa");

  });

  // Cuando se pierde el foco del elemento
  presetsCard.addEventListener("blur", () => {

    presetsCard.classList.remove("imagen-activa");

  });

}