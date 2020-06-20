import {
    buscarHeroeAsync,
    buscarHeroe
} from './promesas';
const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroeArr = async () => {

    // Cuando se reuqiera hacer hacer un un await dentro de un for, es posible que se sienta lenta la respuesta, para ello, no es recomendable hacer dentro de un for pero para optimizar el tiempo es, para ello se tiene que hacer el await fuera del for, 
    // Forma larga de utilizar el await
    // const heroeArr = [];
    // for (const id of heroesIds) {
    //     heroeArr.push(buscarHeroeAsync(id));
    // }

    // return await Promise.all(heroeArr);

    // Forma elegante de utilizar el await
    return await Promise.all(heroesIds.map(buscarHeroe));





    // Todavía se podría simplicar la función dejandola en una sola linea pero se haría más dificil la comprensión, eso es eliminando las llaves y el return
}
