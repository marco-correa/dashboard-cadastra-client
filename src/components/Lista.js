import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import ApiService from '../utils/ApiService';

const Bloco = styled.div`
    flex: 0 0 24%;
    border: 1px solid #54545452;
    border-radius: 3px;
    background-color: #fff;
    padding: 1em;
`;


class Lista extends Component {

    constructor(props){
        super(props);

        this.state = {
            titulo: props.titulo,
            requisicao: props.requisicao,
            dados: []
        };
    }

    componentDidMount(){

/*        var metodo = ApiService[this.state.requisicao];
        metodo()
            .then( res => {
                //this.setState({ dados: res.data });

                this.setState({ 
                    dados: {
                        valor: "R$ 99",
                        legenda: {
                            texto: "Meta sobre",
                            valor: "15k"
                        }
                    }
                });
            })
            .catch( error => {
                console.log(error);
            });*/
    }

    render() {
        const { dados } = this.state;

        return (
            <Bloco>
                { this.state.dados.length === 0 ? 

                    <Loader />
                    
                    :

                    <Fragment>
                        <Titulo>{this.state.titulo}</Titulo>
                        <Informacoes>
                            <Valor>{dados.valor}</Valor>
                        </Informacoes>
                        <Legenda>{dados.legenda.texto + ' ' + dados.legenda.valor}</Legenda>
                    </Fragment>
                }
            </Bloco>
        );
    }
}
export default Item;