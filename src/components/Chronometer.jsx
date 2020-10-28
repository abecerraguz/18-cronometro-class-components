import React, { Component } from 'react';

import { nanoid } from 'nanoid'

import styled from 'styled-components'

class Chronometer extends Component {
    // Creamos los primeros elementos que necesita el cronometro para iniciar
    state = {
        hours:0,
        minutes:0,
        seconds:0,
        miliseconds:0
    }

    //Función que se llama con el boton start
    handleStartClick = () => {

    }

    //Conteo del cronómetro
    tick() {

    }

    //Función que se llama con el boton stop
    handleStopClick = () => {

    }

    //Función que se llama con el boton timestamp
    handleTimestamp = () => {

    }

    //Función que se llama con el boton reset
    handleReset = () => {

    }

    //Función de actualización del estado
    updateTimer(miliseconds, seconds, minutes, hours) {

    }

    // Creamos la funcion AddCero para agregar un cero si se necesita
    addZero(value) {
        // Si el valor es menor a 10 entoces se agrega un cero, si no retorna el valor normal
        return value < 10 ? `0${value}` : value
    }

    render() {
        /*
             Sacamos el p, para tarer los state, esto se va a caer dado que debemos 
             traer los estados en una constante.
        */
        let { hours, minutes, seconds, miliseconds } = this.state

        // Usamos la funcion addZero
        hours = this.addZero(hours);
        minutes = this.addZero(minutes);
        seconds = this.addZero(seconds);
        miliseconds = this.addZero(miliseconds);

        return (
            <h3>{`${hours} : ${minutes} : ${seconds} : ${miliseconds}`}</h3>
        )
    }
}

export default Chronometer;