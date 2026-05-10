
let score = 0;
let current = null;

const places = [
  {
    image: "assets/images/chile.jpg",
    continent: "américa",
    country: "chile"
  },
  {
    image: "assets/images/japan.jpg",
    continent: "asia",
    country: "japón"
  }
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
