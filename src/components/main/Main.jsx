import React from "react";
import Data from "../data.json";
import styles from "./Main.module.css"
import Opciones from "../opciones/Opciones"
import Recordatorio from "../recordatorio/Recordatorio"

class Main extends React.Component {
    state = {
        contador: 0,
        seleccionPrevia: "",
        historia: {id:"", imagen:"", historia:"", opciones:""},
        historial: [] 
    }

    componentDidMount() {
        this.setState({historia: Data[0]});
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.contador!==this.state.contador){
            this.setState({historial:[...this.state.historial, this.state.seleccionPrevia]})
        }
    }

    handleSelect = (opcion) => {
        const contador = this.state.contador;
        const opciones = this.state.historia.opciones;
        if(contador < 7){ 
            if(this.state.seleccionPrevia==="A"){
                switch(opcion){
                    case opciones.a:
                        this.setState({ historia: Data[contador+2], contador: contador + 2, seleccionPrevia: "A"})
                        break
                    default:
                        this.setState({ historia: Data[contador+3], contador: contador + 3, seleccionPrevia: "B"})
                }
            }else{
                switch(opcion){
                    case opciones.a:
                        this.setState({ historia: Data[contador+1], contador: contador + 1, seleccionPrevia: "A"})
                        break
                    default:
                        this.setState({ historia: Data[contador+2], contador: contador + 2, seleccionPrevia: "B"})
                }
            }
        }else{
            alert("Fin.")
        }
    }

    render() {
        const historia = this.state.historia;
        return (
            <div className={styles.layout}>
                <h1 className={styles.historia}>
                    <p>{historia.historia}</p>
                </h1>
                <Opciones opcionA={historia.opciones.a}
                opcionB= {historia.opciones.b}
                handleSelect = {this.handleSelect}
                />
                <Recordatorio seleccionPrevia={this.state.seleccionPrevia} historial = {this.state.historial}/>

            </div>
        )
    }
}

export default Main;
