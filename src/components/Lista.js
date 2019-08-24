import React, { Component } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import ApiService from '../utils/ApiService';

const Bloco = styled.section`
    margin-top: 1em;
    border: 1px solid #54545452;
    border-radius: 3px;

    &.loading{
        padding: 1em;
    }
`;

const Table = styled.table`
position: relative;
    opacity: 1;
    animation: animaBloco 1.5s;

    @keyframes animaBloco {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
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

        const metodo = ApiService[this.state.requisicao];
        
        metodo()
            .then( res => {
                //this.setState({ dados: res.data });

                this.setState({ 
                    dados: [
                        {
                            nome: "Links Patrocinados",
                            receita: 123,
                            porcentagem: 15
                        },
                        {
                            nome: "SEO",
                            receita: 234,
                            porcentagem: 10
                        },
                        {
                            nome: "Busca orgânica",
                            receita: 345,
                            porcentagem: 5
                        }
                    ]
                });
            })
            .catch( error => {
                console.log(error);
            });
    }

    render() {
        const { dados } = this.state;

        return (
            <Bloco className={dados.length === 0 ? 'loading' : '' }>
                { dados.length === 0 ? 
                    <Loader />                  
                    :
                    <Table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">{ this.state.titulo }</th>
                                <th scope="col">Receita</th>
                                <th scope="col">Porcentagem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dados.map( (item, index) => {
                                    return(
                                        <tr key={ index }>
                                            <td>{ item.nome }</td>
                                            <td>{ item.receita }</td>
                                            <td>{ item.porcentagem }</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                }
            </Bloco>
        );
    }
}
export default Lista;