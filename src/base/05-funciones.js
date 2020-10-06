const saludar2= (nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3= (nombre)=> `Hola, ${nombre}`;
const saludar4= ()=> `Hola Mundo`;


export const getUser=()=>({
        uid:'ABCD1234',
        username:'Oscarin'
    });


export const getUserActivo=(nombre)=>({
    uid:'DCD34',
    username:nombre
})
