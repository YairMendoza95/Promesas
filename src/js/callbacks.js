const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },

    irom: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },

    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alérgica a la picadura de arañas'
    },

}


export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    heroe ? callback(null, heroe) : callback(`No existe el heroe con el id ${id}`);
    //callback(heroe)
}