console.log("Bonjour");
const boutonTheme = document.querySelector("#bouton-theme");
console.log(boutonTheme);
boutonTheme.addEventListener("click", function () {
   document.body.classList.toggle("sombre") 
   document.querySelector("section").classList.toggle("sombre")
  //ce qui se passe à chaque clic
});