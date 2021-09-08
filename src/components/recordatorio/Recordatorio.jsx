import React from "react";
import Styles from "./Recordatorio.module.css"

class Recordatorio extends React.Component{

    render(){
        return(
            <div className= {Styles.recordatorio}>
                <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{this.props.historial.map((el, index) => {
                    return <li key= {index}>{el}</li>})}</ul>
            </div>
        )
    }
}

export default Recordatorio;