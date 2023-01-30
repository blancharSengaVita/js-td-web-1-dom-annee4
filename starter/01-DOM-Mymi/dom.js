/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */
const nav = document.querySelector('#nav');
console.log(nav);

/* 2. Récupérer tous les li */
const lis = document.querySelectorAll('li');
console.log(lis);

/* 3. Cibler le 4e li */
console.log(lis[3]);

/* 4. Compter le nombre de li dans la page */
console.log(lis.length)

/* 5. Cibler le premier li pair */
const liPairs = document.querySelectorAll('.pair');
console.log(liPairs[0]);

/* 6. Récupérer tous les li de classe impair */
const liImpairs = document.querySelectorAll('.impair');


/* a) afficher ce qu'on obtient */
console.log(liImpairs);

/* b) afficher le 2e li de classe impair */
console.log(liImpairs[1])


/* c) afficher chacun des li impair */
liImpairs.forEach(impairs => console.log(impairs));


/* d) compter le nombre de li de classe impair dans la page */
console.log(liImpairs.length);


/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */
console.log(lis[3].previousElementSibling);


/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */
console.log(lis[3].nextElementSibling);

/* 9. Cibler le parent du 4e li */
console.log(lis[3].parentNode);

/* 10. Récupérer tous les enfants de l'ul */
const ul = document.querySelector('ul');

/* a) afficher ce qu'on obtient */
console.log(ul);

/* b) cibler le 1er enfant de l'ul */
console.log(ul.firstElementChild);

/* c) cibler le dernier enfant de l'ul */
console.log(ul.lastElementChild);

/* c) cibler le 4e enfant de l'ul */
console.log(ul.childNodes.item(7));


/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */
console.log( document.getElementById("nav"). getElementsByTagName("li")[3].firstChild );

/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */
// console.log(document.getElementsByTagName("li")[2].childNodes[3].firstChild);

/* c) document.getElementsByTagName("li")[2].firstChild.firstChild */
console.log(document.getElementsByTagName("li")[2].firstChild.firstChild);


/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */
console.log(document.getElementById("nav").getElementsByTagName("li")[3].firstChild.nodeType);
console.log(document.getElementById("nav").getElementsByTagName("li")[3].firstChild.nodeName);
console.log(document.getElementById("nav").getElementsByTagName("li")[3].firstChild.nodeValue);

/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */
console.log(document.getElementById("nav").getElementsByTagName("a")[2].firstChild.nodeName);
console.log(document.getElementById("nav").getElementsByTagName("a")[2].firstChild.nodeType);
console.log(document.getElementById("nav").getElementsByTagName("a")[2].firstChild.nodeValue);


/* 13. Changer le texte "Photos" en "Visuals" */
const oui = document.getElementById("nav").getElementsByTagName("a")[2].firstChild.nodeValue = 'Visuals';

console.log(oui);



/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */
const non = document.querySelector('a[href="photos.html"]');
console.log(non);
non.setAttribute('href', 'photos.php');

/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */
non.setAttribute('title', 'voir mes photos');

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/
ul.removeChild(lis[lis.length-1]);
console.log(ul);


/* 16. Ajouter un li à la fin de la liste */
const newLi = document.createElement('li');
ul.appendChild(newLi);
console.log(ul);



/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */
const newLi2 = document.createElement('li');

const newA = document.createElement('a');
newA.setAttribute('href', 'biblio.html');
newA.setAttribute('title', 'consulter ma bibliographie');
newA.textContent = 'Bibliographie';

newLi2.appendChild(newA);

const visuals = lis[3]
console.log(visuals)
visuals.previousElementSibling.appendChild(newLi2)
console.log(newA)





/* 18. Modifier le lien "Photos" 
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */
visuals.setAttribute('title', 'voir la galerie');
visuals.setAttribute('href', 'visuals.html');




/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */

const liss = document.querySelector("#nav");
console.log(liss)
visualsVisuals = liss.childNodes[7];
console.log(visualsVisuals);
const photoPhoto = visualsVisuals.cloneNode(true);

photoPhoto.childNodes[0].textContent = "photos";
photoPhoto.childNodes[0].setAttribute('title', "voir la galerie" );
photoPhoto.childNodes[0].setAttribute('href', "visuals.html" );
liss.insertBefore(photoPhoto, visualsVisuals);
console.log(photoPhoto);

/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/

console.log(liss.lastChild);
const newCreation = document.createElement('li').appendChild(document.createTextNode("Contact : monmail@gmail.com"));
liss.replaceChild(newCreation, liss.lastChild);