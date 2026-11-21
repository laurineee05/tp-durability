console.log("Bonjour");
const boutonTheme = document.querySelector("#bouton-theme");
console.log(boutonTheme);
boutonTheme.addEventListener("click", function () {
   document.body.classList.toggle("sombre") 
   document.querySelectorAll("section").forEach(function(section) {section.classList.toggle("sombre");
   if 
   (document.body.classList.contains("sombre"))
   {
    boutonTheme.textContent = "Mode clair"
  }
    else {
      boutonTheme.textContent = "Mode sombre"
   }});
  //ce qui se passe à chaque clic
});

const curseur = document.querySelector("#curseur-taille");
const valeurTaille =document.querySelector("#valeur-taille")
curseur.addEventListener("input", function(){
  document.body.style.fontSize = curseur.value + "%";
  valeurTaille.textContent = curseur.value +"%";
});

const heure = new Date().getHours();
console.log(heure);
const salutation = document.querySelector("#salutation");
if 
  (heure < 12) {
    salutation.textContent ="Bonjour, bonne lecture !";
  }
  else if (heure < 17) {
    salutation.textContent = "Bon après midi, bonne lecture !";
  }
  else {
    salutation.textContent ="Bonsoir, bonne lecture !";
  }

const POIDS_PAGE_MO = 2
const nombre = document.querySelector("#pages-par-jour");
const resultat = document.querySelector("#resultat");
document.querySelector("#bouton-calculer").addEventListener("click", function(){
  let nombrepages = Number(document.querySelector("#pages-par-jour").value);
  let poids = Math.round(0.73 * nombrepages);
  let message = "Votre consommatiom est de " + poids + "Go par an. ";
  if (poids < 10){
    message = message + "Vous ne consommez pas beaucoup !"; 
  }
  else if (poids < 50){
    message = message + "Vous avez une consommation moyenne !";
  }
  else {
    message = message + "Vous consommmez beaucoup !"; 
  }
  resultat.textContent = message;
})
