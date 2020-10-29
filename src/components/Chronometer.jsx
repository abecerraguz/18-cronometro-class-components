import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

    // Creamos los Botones
    const Button = styled.button`

        /* Creamos un boton activado y desactivado (disabled), para esto debemos
           crear un props en state
        */
        background-color:${({disabled})=>disabled ? 'transparent' : '#387EF5' };
        border:${({disabled})=>disabled ? '1px solid #387EF5' : 'none' };
        outline:none;
        border-radius:15px;
        padding:0.7rem 1.5rem;
        margin:1rem;
        cursor:pointer;
        color:${({disabled})=>disabled ? '#444' : '#fff' };

    `

class Chronometer extends Component {


    // Creamos los primeros elementos que necesita el cronometro para iniciar
    state = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0,
        running: false
    }

    //Función que se llama con el boton start
    handleStartClick = () => {
        // Primero debemos comprobar si el cronometro esta funcionado
        if(!this.state.running){
            /*
                El problema de crear un intervalo aquí es que si lo creamos en una cosntante 
                no podremos accesder al intervalo, para solucionar esto podemos crear una clase
                esta se llama interval la cual se iguala a un setInterval el cual recibe un callback
            */
           this.interval = setInterval(()=>{
                this.tick()
           },100)

           // Al hacer click el setState de running queda en true
           this.setState({ running: true })
        }
    }

    //Conteo del cronómetro
    tick() {
        let hours = this.state.hours
        let minutes = this.state.minutes
        let seconds = this.state.seconds
        let miliseconds = this.state.miliseconds + 1

        if (miliseconds === 10) {
            miliseconds = 0
            seconds = seconds + 1
        }

        if (seconds === 60) {
            seconds = 0
            minutes = minutes + 1
        }

        if (minutes === 60) {
            minutes = 0
            hours = hours + 1
        }

        this.updateTimer(hours, minutes, seconds, miliseconds)
    }

    //Función que se llama con el boton stop
    handleStopClick = () => {
        if (this.state.running) {
            clearInterval(this.interval)
            this.setState({ running: false })
        }
    }

    //Función que se llama con el boton timestamp
    handleTimestamp = () => {

    }

    //Función que se llama con el boton reset
    handleReset = () => {

    }

    //Función de actualización del estado
    updateTimer(hours, minutes, seconds, miliseconds) {
        this.setState({
            hours, minutes, seconds, miliseconds
        })
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
       let { hours, minutes, seconds, miliseconds, running } = this.state

        // Usamos la funcion addZero
        hours = this.addZero(hours)
        minutes = this.addZero(minutes)
        seconds = this.addZero(seconds)
        miliseconds = this.addZero(miliseconds)

        return (
            <>
            <h3>{`${hours} : ${minutes} : ${seconds} : ${miliseconds}`}</h3>
                 {/* Empezamos por activar el start con onClick 
                 y se crea la funcion */}
                 <Button disabled={running} onClick={this.handleStartClick}> START </Button>
                 {/* Si no esta en false !running */}
                 <Button disabled={!running} onClick={this.handleStopClick}> STOP </Button>
                 <Button disabled={!running}> TIMESTAMP </Button>
                 <Button disabled={running}>RESET</Button>
            </>
        )
    }
}

export default Chronometer;