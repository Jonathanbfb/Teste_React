import React, { Component } from 'react'


export default class Conversor extends Component{

        constructor(props){

            super(props);

            this.state = {
                moedaA_valor: "",
                moedaB_valor: 0,
            }

            this.converter = this.converter.bind(this)
        }

        converter(){
            console.log(this.state)

        }
render(){
    return(

            <div className="conversor">
            <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
            <input type ="text"onChange={(event)=> (this.setState({moedaA_valor:event.target.value}))}></input>
            <input type ="button" value="Converter" onClick={this.converter}></input>
            <h2> Valor Convertido</h2>

            </div>



        )

}

}