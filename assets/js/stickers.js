function calcularStickers() {
  // Se obtiene los valores de los inputs
  const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
  const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
  const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

  // Se crea la const totalStickers para sumar la cantidad de stickers
  const totalStickers = sticker1 + sticker2 + sticker3;

  // Se crea la const resultado para obtener el párrafo donde se mostrará el resultado
  const resultado = document.getElementById('resultado');

  // Se utiliza una condicion if else para mostrar los mensajes dependiendo si el valor del resultado es mayor o menor que 10
  if (totalStickers > 10) {
    resultado.textContent = 'Lo siento, llevas demasiados stickers';
    resultado.className = 'result btn-too-many';
  } else {
    resultado.textContent = `Llevas ${totalStickers} stickers`;
    resultado.className = 'result btn-ok';
  }
}
