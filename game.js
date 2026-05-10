
let score = 0;
let current = null;

const places = [
  {
    image: "assets/images/Captura de pantalla 2024-12-31 003926.png",
    continent: "oceania",
    country: "australia"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-06 213006.png",
    continent: "europa",
    country: "grecia"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-06 213935.png",
    continent: "america",
    country: "peru"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-25 191932.png",
    continent: "asia",
    country: "japon"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-25 210135.png",
    continent: "europa",
    country: "grecia"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-25 210302.png",
    continent: "europa",
    country: "grecia"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-25 210500.png",
    continent: "europa",
    country: "italia"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-25 211002.png",
    continent: "europa",
    country: "italia"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-25 211212.png",
    continent: "africa",
    country: "tunez"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-25 211403.png",
    continent: "africa",
    country: "tunez"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-25 211837.png",
    continent: "europa",
    country: "Barcelona"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-25 191932.png",
    continent: "asia",
    country: "japon"
  },
  {
    image: "assets/images/Captura de pantalla 2025-09-25 191932.png",
    continent: "asia",
    country: "japon"
  },
  {
    image: "assets/images/Captura de pantalla 2025-11-16 041031.png",
    continent: "europa",
    country: "italia"
  },
  {
    image: "assets/images/Captura de pantalla 2025-12-26 163429.png",
    continent: "america",
    country: "chile"
  },
  {
    image: "assets/images/Captura de pantalla 2025-12-26 201414.png",
    continent: "asia",
    country: "taiwan"
  },
  {
    image: "assets/images/Captura de pantalla 2026-01-17 213900.png",
    continent: "asia",
    country: "arabia saudita"
  },
  // puedes añadir más
];

function loadRandom() {
  current = places[Math.floor(Math.random() * places.length)];
  document.getElementById("image").src = current.image;
  document.getElementById("continent").value = "";
  document.getElementById("country").value = "";
  document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
  const cont = document.getElementById("continent").value.toLowerCase().trim();
  const coun = document.getElementById("country").value.toLowerCase().trim();

  let msg = "";

  if (cont === current.continent) {
    score += 1;
    msg += "continente correcto (+1)\n";
  } else {
    score -= 100;
    msg += "continente incorrecto (-100)\n";
  }

  if (coun === current.country) {
    score += 100;
    msg += "país correcto (+100)";
  } else {
    score -= 1;
    msg += "país incorrecto (-1)";
  }

  document.getElementById("score").innerText = score;
  document.getElementById("feedback").innerText = msg;

  setTimeout(loadRandom, 1500);
}

loadRandom();
