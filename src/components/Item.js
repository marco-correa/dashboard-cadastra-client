import React, { Component } from 'react';
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

const Conteudo = styled.div`
    position: relative;
    opacity: 1;
    animation: animaBloco 1.5s;

    &.alinha{
        top: 10%;
    }

    @keyframes animaBloco {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

const Titulo = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 25px;
`;

const Informacoes = styled.div`
    position: relative;
    height: 50px;
`;

const Valor = styled.p`
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
`;

const Legenda = styled.p`
    font-size: 12px;
    text-align: center;
    margin: 0;
`;

class Item extends Component {

    constructor(props){
        super(props);

        this.state = {
            titulo: props.titulo,
            legenda: props.legenda !== undefined ? props.legenda : '',
            requisicao: props.requisicao,
            dados: []
        };
    }

    componentDidMount(){

        const metodo = ApiService[this.state.requisicao];
        
        metodo()
            .then( res => {
                //this.setState({ dados: res.data });

                this.setState({ 
                    dados: {
                        valor: 99,
                        legenda: {
                            texto: "Meta sobre",
                            valor: "15k"
                        }
                    }
                });
            })
            .catch( error => {
                console.log(error);
            });
    }

    render() {
        const { dados, legenda } = this.state;

        console.log(legenda);
        return (
            <Bloco>
                { dados.length === 0 ? 
                    <Loader />                  
                    :
                    <Conteudo className={ legenda === '' ?  'alinha' : ''}>
                        <Titulo>{ this.state.titulo }</Titulo>
                        <Informacoes>
                            <Valor>R$ { dados.valor }</Valor>
                        </Informacoes>
                        <Legenda>{ legenda }</Legenda>
                    </Conteudo>
                }
            </Bloco>
        );
    }
}
export default Item;