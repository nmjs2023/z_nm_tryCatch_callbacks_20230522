console.clear;

import {datos} from './datos.js';
/* console.log(datos); */

/* 
const buscarHeroe = (idHeroe) =>{
    const heroe = datos.find((heroe) => {
        return heroe.id === idHeroe;
    });

    console.log(heroe);
    
} 
buscarHeroe('1');
buscarHeroe('5d86371fd55e2e2a30fe1cc3');
*/

/**
 * 
 * @param {string} idHeroe 
 * @param {function} callback  
 * @param {(heroe: Object) => void} callback  
 */

const buscarHeroe = (idHeroe, callback) =>{
    const heroe = datos.find(heroe => heroe.id === idHeroe);

    callback(heroe);
    
}

buscarHeroe('5d86371fd55e2e2a30fe1cc3', (heroe) =>{
    /* console.log('----------SOLO EL NOMBRE --------'); */
    console.log(heroe.name);
});

/*  buscarHeroe('5d86371fd55e2e2a30fe1cc3', (heroe) =>{
    alert(heroe.name);
}); */ 

const mostrarConsola = (heroe) => {
    /* console.log('-----------function mostrarConsola---------------') */
    //console.log(heroe);
    
    try {
        console.log(heroe.name);    
    } catch (error) {
        console.log('error, codigo no encontrado')
        console.log(error);
    }
    console.log('si al programa no se le controlan las excepciones, esto no se ejecutará si surge una')
};

buscarHeroe('5d86371fd55e2e2a30fe1ccb2', mostrarConsola);
buscarHeroe('5d86371fd55e2e2a30fe1ccb23', mostrarConsola);


