import "./styles.css";

import {
    promesaLenta,
    promesaMedia,
    promesaRapida,
} from "./js/promesas";
/* 
promesaLenta.then(console.log);
promesaMedia.then(console.log);
promesaRapida.then(console.log); */

// El Promise.race ejecuta un conjunto de promesas y devuelve la promesa más rápida
Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(
    console.log
);