import "./styles.css";
import {
    buscarHeroe,
    buscarHeroeAsync
} from './js/promesas';
import {
    obtenerHeroeArr
} from './js/await';

// Ejemplos Async
// buscarHeroe('capi').then(console.log).catch(console.log);
// buscarHeroeAsync('iron').then(console.log).catch(console.log);

// Ejemplo await
obtenerHeroeArr().then(console.table);