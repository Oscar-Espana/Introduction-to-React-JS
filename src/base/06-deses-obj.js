// Desestructuración
// Asignación Desestructurante

const persona={
    nombre:'Tony',
    edad:45,
    clave:'Ironman',
    rango:'Soldado'
};

//const {nombre,clave,edad}=persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);


const useContext=({clave,nombre, edad,rango='Capitán'})=>{
    //console.log(nombre, edad, rango)
    return {
        nombreClave:clave,
        anios:edad,
        lating:{
            lat:14.12,
            long:-12.6
        }
    }
};

const {nombreClave, anios, lating:{lat,long}}=useContext(persona);

console.log(nombreClave, anios);
console.log(lat, long);