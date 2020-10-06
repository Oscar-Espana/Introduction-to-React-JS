
export const getImagen= async ()=>{

    try {
        const apiKey='TCQFCpq5FTQE0QxW0KCnD3xeqaZU2Spa';
        const respuesta= await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data}=await respuesta.json();
        const {url}=data.images.original;
        return url
    } catch (error) {
        return 'No existe'
    }
    
}

getImagen();
