import React from "react";
import styles from "./Opciones.module.css"

class Opciones extends React.Component {

    handleSelect = (opcion) => {
       const opcionSeleccionada = opcion.target.attributes.opcion.nodeValue
        this.props.handleSelect(opcionSeleccionada)
    }


    render() {
        return (
            <div className={styles.opciones}>
                <div className={styles.opcion}>
                    <button className={styles.botones} onClick={this.handleSelect} opcion={this.props.opcionA}> A </button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className={styles.opcion}>
                    <button className={styles.botones} onClick={this.handleSelect} opcion={this.props.opcionB}> B </button>
                    <h2>{this.props.opcionB}</h2>
                </div>
            </div>
        )
    }
}

export default Opciones;