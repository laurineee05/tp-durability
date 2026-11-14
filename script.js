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

