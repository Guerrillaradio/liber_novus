
let score = 0;
let index = 0;

const places = [
  { image: "assets/images/arabia_saudita.png", continent: "asia", country: "arabia saudita" },
  { image: "assets/images/australia.png", continent: "oceania", country: "australia" },
  { image: "assets/images/barcelona.png", continent: "europa", country: "barcelona" },
  { image: "assets/images/chile.png", continent: "america", country: "chile" },
  { image: "assets/images/chile2.png", continent: "america", country: "chile" },
  { image: "assets/images/desconocido.png", continent: "desconocido", country: "desconocido" },
  { image: "assets/images/estados_unidos.png", continent: "america", country: "estados unidos" },
  { image: "assets/images/grecia1.png", continent: "europa", country: "grecia" },
  { image: "assets/images/grecia2.png", continent: "europa", country: "grecia" },
  { image: "assets/images/grecia3.png", continent: "europa", country: "grecia" },
  { image: "assets/images/italia1.png", continent: "europa", country: "italia" },
  { image: "assets/images/italia2.png", continent: "europa", country: "italia" },
  { image: "assets/images/italia4.png", continent: "europa", country: "italia" },
  { image: "assets/images/japon.png", continent: "asia", country: "japon" },
  { image: "assets/images/japon2.png", continent: "asia", country: "japon" },
  { image: "assets/images/japon3.png", continent: "asia", country: "japon" },
  { image: "assets/images/mongolia.png", continent: "asia", country: "mongolia" },
  { image: "assets/images/peru.png", continent: "america", country: "peru" },
  { image: "assets/images/taiwan.png", continent: "asia", country: "taiwan" },
  { image: "assets/images/tunez.png", continent: "africa", country: "tunez" },
  { image: "assets/images/tunez2.png", continent: "africa", country: "tunez" }
];

// 🔀 Barajar una sola vez
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 🖼️ Cargar imagen actual
function loadCurrent() {
  if (index >= places.length) {
    endGame();
    return;
  }

  const current = places[index];
  document.getElementById("image").src = current.image;
  document.getElementById("continent").value = "";
  document.getElementById("country").value = "";
  document.getElementById("feedback").innerText =
    `Imagen ${index + 1} de ${places.length}`;
}

// ✅ Comprobar respuesta
function checkAnswer() {
  const current = places[index];
  const cont = document.getElementById("continent").value.toLowerCase().trim();
  const coun = document.getElementById("country").value.toLowerCase().trim();

  let msg = "";

  /* === CONTINENTE === */
  if (cont === "desconocido") {
    msg += "✅ continente desconocido (0 puntos)\n";
  } else if (cont === current.continent) {
    score += 1;
    msg += "✅ continente correcto (+1)\n";
  } else {
    score -= 100;
    msg += "❌ continente incorrecto (-100)\n";
  }

  /* === PAÍS === */
  if (coun === "desconocido") {
    msg += "✅ país desconocido (0 puntos)";
  } else if (coun === current.country) {
    score += 100;
    msg += "✅ país correcto (+100)";
  } else {
    score -= 1;
    msg += "❌ país incorrecto (-1)";
  }

  document.getElementById("score").innerText = score;
  document.getElementById("feedback").innerText = msg;

  index++;
  setTimeout(loadCurrent, 1200);
}

// 🏁 Final del juego
function endGame() {
  document.getElementById("game").innerHTML = `
    <h2>Juego terminado</h2>
    <p>Puntaje final: <strong>${score}</strong></p>
    <button onclick="restartGame()">volver a jugar</button>
  `;
}

// 🔁 Reiniciar
function restartGame() {
  score = 0;
  index = 0;
  shuffle(places);
  document.getElementById("score").innerText = score;
  document.getElementById("game").innerHTML = `
    <img id="image">
    <div><input id="continent" placeholder="continente"></div>
    <div><input id="country" placeholder="país"></div>
    <p class="hint">Si no sabes, escribe: <strong>desconocido</strong></p>
    <button onclick="checkAnswer()">responder</button>
  `;
  loadCurrent();
}

// ▶️ Inicio
shuffle(places);
loadCurrent();
