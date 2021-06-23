import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Prueba para GifExpertApp', () => {

    let wrapper; //undefined
    // let wrapper = shallow( <CounterApp /> ); 
    beforeEach( () => {
       wrapper = shallow(
           <GifExpertApp /> 
       );
        // console.log('beforeEach!!!')
    });

    test('Debe mostrar el texto <GifExpertApp /> ', () => {
        const text = 'GifExpertApp';
        console.log(text);
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar la linea <hr /> ', () => {
        // const linea = '';
        // console.log(linea);
        const textoValor = wrapper.find('hr').text().trim();
        expect( textoValor ).toMatchSnapshot();
    });

    test('Debe mostrar el botón Agregar ', () => {
      const boton = wrapper.find('button').at(0).simulate('click');
      console.log(boton.html());
    });
});
