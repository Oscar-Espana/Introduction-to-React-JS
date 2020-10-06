import React from 'react'
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom'
//import { render } from '@testing-library/react'

describe('Pruebas en <PrimeraApp/>', () => {
    
    // test('debe de mostrar el mensaje "Hola, soy Oscar"', () => {
        
    //     const saludo='Hola, soy Oscar';
        
    //     const {getByText}=render(<PrimeraApp saludo={saludo}/>);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp /> correctamanete', () => {
        
        const saludo='Hola, soy Oscar';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar el subtitulo enviado por props ', () => {
        
        const saludo='Hola, soy Oscar';
        const subTitulo ='Subtitle'
        const wrapper = shallow(<PrimeraApp saludo={ saludo } subtitulo={ subTitulo } />);

        const textoParrafo=wrapper.find('p').text();
        expect(textoParrafo).toBe(subTitulo);

    })
    
    
})
