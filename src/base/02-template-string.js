const nombre='Oscar';
const apellido='España';

//const nombreCompleto=nombre+' '+apellido;
const nombreCompleto=
`${nombre}
${apellido}
${1+1}
`;
// console.log(nombreCompleto);

export function getSaludo(nombre = 'Carlos'){
    return 'Hola '+nombre;
}

// console.log(`Este es un texto: ${getSaludo(nombre)}`);