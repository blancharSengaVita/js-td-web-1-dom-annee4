// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
 DOM - PREPA 3 : « Instruments » : attributs et classes
- Créez une fonction getInfosLiens qui doit afficher :
    - le nombre total de liens dans la page web ;
    - la cible du premier et du dernier lien.
    N.B. Cette fonction doit afficher un résultat correct, quel que soit le nombre de liens présents dans la page.
- Ajoutez un nouvel instrument à la page web, puis vérifiez le nouveau résultat de votre programme.
    <li id="clavecin" class="cordes pincees">
        Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
    </li>
- Écrivez la fonction possede qui vérifie qu'un élément avec un certain id possède une classe
- Testez grâce à cette foncion 
    - si l'élément d'id "saxophone" possède la classe "bois" (doit afficher true)
    - si l'élément d'id "saxophone" possède la classe "cuivre" (doit afficher false)
    - si l'élément d'id "trompette" possède la classe "cuivre" (doit afficher true)
    - si l'élément d'id "contrebasse" possède la classe "cordes" (doit afficher "Aucun élément ne possède l'id contrebasse")
*/


document.querySelector('ul').insertAdjacentHTML('beforeend', `<li> L' <a href="#">instrument</a></li>`);

function getInfosLiens() {
  const links = document.querySelectorAll("a")
  console.log(links.length);
  console.log(links.item(0));
  console.log(links.item(links.length-1));
}

function possede (noeud,classe){
  const noeudElt = document.getElementById(noeud)
  if (noeudElt){
    console.log(document.getElementById(noeud).classList.contains(classe));
  } else {
    console.log(`Aucun élément ne possède l'id ${noeud}`);
  }
}
getInfosLiens();


possede("saxophone","bois");
possede("saxophone","cuivre");
possede("trompette","cuivre");
possede("contrebasse","cordes");