// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/

const contenuWidth = document.getElementById('contenu').offsetWidth;
const contenuHeight = document.getElementById('contenu').offsetHeight;
const infos = document.getElementById('infos');
const tailles = [contenuWidth, contenuHeight];
const ul = document.createElement('ul');
infos.appendChild(ul);

ul.insertAdjacentHTML('beforeend',`<li>largeur : ${contenuWidth}</li> <li>longueur : ${contenuHeight}</li>`);




