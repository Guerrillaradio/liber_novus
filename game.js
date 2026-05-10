
let score = 0;
let current = null;

const places = [
  {
    image: "assets/images/arabia_saudita.png",
    continent: "asia",
    country: "arabia saudita"
  },
  {
    image: "assets/images/australia.png",
    continent: "europa",
    country: "australia"
  },
  {
    image: "assets/images/barcelona.png",
    continent: "europa",
    country: "barcelona"
  },
  {
    image: "assets/images/chile.png",
    continent: "america",
    country: "chile"
  },
  {
    image: "assets/images/chile2.png",
    continent: "america",
    country: "chile"
  },
  {
    image: "assets/images/desconocido.png",
    continent: "desconocido",
    country: "desconocido"
  },
  {
    image: "assets/images/estados_unidos.png",
    continent: "america",
    country: "estados unidos"
  },
  {
    image: "assets/images/grecia1.png",
    continent: "europa",
    country: "grecia"
  },
  {
    image: "assets/images/grecia2.png",
    continent: "europa",
    country: "grecia"
  },
  {
    image: "assets/images/grecia3.png",
    continent: "europa",
    country: "grecia"
  },
  {
    image: "assets/images/italia1.png",
    continent: "europa",
    country: "italia"
  },
  {
    image: "assets/images/italia2.png",
    continent: "europa",
    country: "italia"
  },
  {
    image: "assets/images/italia4.png",
    continent: "europa",
    country: "italia"
  },
  {
    image: "assets/images/japon.png",
    continent: "asia",
    country: "japon"
  },
  {
    image: "assets/images/japon2.png",
    continent: "asia",
    country: "japon"
  },
  {
    image: "assets/images/japon3.png",
    continent: "asia",
    country: "japon"
  },
  {
    image: "assets/images/mongolia.png",
    continent: "asia",
    country: "mongolia"
  },
  {
    image: "assets/images/peru.png",
    continent: "america",
    country: "peru"
  },
  {
    image: "assets/images/taiwan.png",
    continent: "asia",
    country: "taiwan"
  },
  {
    image: "assets/images/tunez.png",
    continent: "africa",
    country: "tunez"
  },
  {
    image: "assets/images/tunez2.png",
    continent: "africa",
    country: "tunez"
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
