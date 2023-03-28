// Selecciona el elemento HTML en la página
const html = document.querySelector("html");

// Crea un elemento `ul` y un elemento `p` para la página
const list = document.createElement("ul");
const info = document.createElement("p");

// Se establece el contenido de texto del elemento `p`
info.textContent =
  "Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.";

// Se agregan los elementos `p` y `ul` recién creados al cuerpo del documento HTML
document.body.appendChild(info);
document.body.appendChild(list);

// Establece una función de controlador de eventos para hacer clic en cualquier parte del documento HTML
// Cada vez que se hace clic, se crea un nuevo elemento `li` en la lista `ul`, y se solicita al usuario que proporcione el contenido del elemento
// También se establece una función de controlador de eventos para hacer clic en cada elemento `li` recién creado
// Cuando se hace clic en un elemento `li`, se detiene la propagación del evento para evitar que se active el controlador de eventos del documento HTML
// y se solicita al usuario que proporcione un nuevo contenido para el elemento `li` haciendo clic
html.onclick = function () {
  const listItem = document.createElement("li");
  const listContent = prompt("What content do you want the list item to have?");
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function (e) {
    e.stopPropagation();
    const listContent = prompt("Enter new content for your list item");
    this.textContent = listContent;
  };
};
