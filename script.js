let knop = document.querySelector("#knop");
let antwoord = document.querySelector("#antwoord");
let aantalKlikken = 0;

knop.addEventListener("click", jumpscare);
antwoord.addEventListener("click", sluiten);

function jumpscare() {
  aantalKlikken++;

  if (aantalKlikken === 1) {
    boodschap = "Told you!!!";
    kleur = "red";
  } else {
    boodschap = "AGAIN?! That's " + aantalKlikken + " times!!!";
    kleur = "yellow";
  }

  antwoord.innerHTML = '<p id="tekst">' + boodschap + '</p>';
  antwoord.innerHTML += '<img src="bestandenvoorfansite/Ferrarijumpscare.jpg" alt="Jumpscare">';

  document.querySelector("#tekst").style.color = kleur;
  knop.style.color = "yellow";
  knop.innerHTML = "I SAID DONT PRESS (" + aantalKlikken + "x)";

  antwoord.classList.add("jumpscare");
}

function sluiten() {
  antwoord.classList.remove("jumpscare");
  antwoord.innerHTML = "";
}