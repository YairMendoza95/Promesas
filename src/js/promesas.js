const heroes = {
    capi: {
        nombre: "Capitán América",
        poder: "Aguantar inyecciones sin morir",
    },

    iron: {
        nombre: "Ironman",
        poder: "Absurda cantidad de dinero",
    },

    spider: {
        nombre: "Spiderman",
        poder: "La mejor reacción alérgica a la picadura de arañas",
    },
};

export const buscarHeroe = (id) => {
    const heroe = heroes[id];
    return new Promise((resolve, reject) => {
        heroe
            ?
            setTimeout(() => resolve(heroe), 1000) :
            reject(`No existe el heroe con el id ${id}`);
    });
};

export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];
    if (heroe)
        return heroe
    else
        throw `No existe el heroe con el id ${id}`;
    // Se puede utilizar throw Error() para mostrar más detalles en cuestión del error
};

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa lenta"), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa Media"), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa rápida"), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
};