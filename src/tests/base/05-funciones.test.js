import { getUser,getUserActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones.js',()=>{
    test('getUser debe de retornar un objeto',()=>{
        const userTest ={
            uid:'ABCD1234',
            username:'Oscarin'
        }

        const user=getUser();

        expect(user).toEqual(userTest);
    })

    //getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto',()=>{
        
        const nombre='Juan';
        const user=getUserActivo(nombre);

        const userTest ={
            uid:'DCD34',
            username:nombre
        }

        
        expect(user).toEqual(userTest);
    })
    
})