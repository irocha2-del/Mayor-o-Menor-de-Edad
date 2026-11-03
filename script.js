// Selección del botón y asignación del evento click
let boton = document.getElementById("btnVerificar");

boton.addEventListener("click", function () {
  // Declaración de variables usando let y captura del valor del input
  let campoEdad = document.getElementById("inputEdad");
  let valorInput = campoEdad.value;

  // Validación: comprobar que el campo no esté vacío
  if (valorInput === "") {
    alert("Por favor, ingresa tu edad.");
  } else {
    let edad = Number(valorInput);

    // Validación: comprobar que sea un número válido y mayor o igual a cero
    if (isNaN(edad) || edad < 0) {
      alert("Por favor, ingresa un número válido y mayor o igual a cero.");
    }
    // Estructura condicional para evaluar la mayoría de edad
    else if (edad >= 18) {
      alert("Eres mayor de edad");
    } else {
      alert("Eres menor de edad");
    }
  }
});
