// Selecciono del botón con nombre buttonEl de button element del DOM mediante una constante que almacena la referencia al mismo
const buttonEl = document.querySelector("button");

// Selecciono del input con nombre inputEl de input element del DOM mediante una constante que almacena la referencia al mismo
const inputEl = document.querySelector("input");

// Selecciono de la lista con nombre listEl de ul element del DOM mediante una constante que almacena la referencia al mismo
const listEl = document.querySelector("ul");

// Creo una función llamada addGoal
function addGoal() {
  // Creo una constante llamada enteredValue que almacena el valor del input obtenido mediante inputEl.value
  const enteredValue = inputEl.value;

  // Creo un nuevo elemento de lista li mediante document.createElement
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  // textContent es una propiedad que permite establecer o devolver el contenido de texto de un nodo
  listEl.appendChild(listItemEl);
  // appendChild es un método que añade un nodo al final de la lista de hijos de un nodo padre especificado
  inputEl.value = "";
  // Limpio el valor del input para que quede vacío después de añadir el elemento a la lista
}

// Añado un event listener al botón para escuchar el evento 'click' y ejecutar la función addGoal cuando se haga click en el botón
buttonEl.addEventListener("click", addGoal);
