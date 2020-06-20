// En caso de que dos o más funciones tengan el mismo nombre aunque sean de diferente clase se puede utilizar un alias para renombrar la función y así evitar ambigüedad en el c+odigo

import {
  buscarHeroe as buscarHeroeCallbacks
} from "./js/callbacks";
import {
  buscarHeroe
} from "./js/promesas";
import "./styles.css";

const heroeId = "capi";
const heroe2 = 'iron';

/* 
    Callback
    buscarHeroes(heroeId, (err, heroe) => {
    err ? console.error(err) : console.info(heroe);
}); */

// Promesa
// buscarHeroe(heroeId).then((heroe) =>
//   console.log(`Enviando a ${heroe.nombre}`)
// );


// Para evitar callbacks o promesas anidadas se utiliza el Promise.all(), el cual recibe un arreglo con las promesas que procesará la promesa, y regresa otro arreglo

//Ejemplo de Promise.all regresando un arreglo primitivo
/* Promise.all([buscarHeroe(heroeId), buscarHeroe(heroe2)])
  .then(hero => {
    console.log(`Enviando a ${hero[0].nombre} y ${hero[1].nombre} a misión`)
  });
 */

//Ejemplo desestructurando el arreglo retornado
Promise.all([buscarHeroe(heroeId), buscarHeroe(heroe2)])
  .then(([hero1, hero2]) => {
    console.log(`Enviando a ${hero1.nombre} y ${hero2.nombre} a misión`);
  }).catch(err => {
    err ? alert(err) : ""
  });