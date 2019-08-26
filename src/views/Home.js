import React, { Fragment } from 'react';
import Item from '../components/Item';
import Lista from '../components/Lista';

import styled from 'styled-components';

const PainelItens = styled.section`
    display: flex;
    justify-content: space-between;
`;

const Main = styled.main`
    padding: 0 1em 1em 1em;
`;


const Home = () => {
    return(
        <Fragment>
            <header>
                <div className="jumbotron">
                    <h1 className="text-center">Dashboard Cadastra</h1>
                </div>
            </header>
            <Main>
                <PainelItens>
                    <Item requisicao="ReceitaPainel" titulo="Receita total" tipo="valor"/>
                    <Item requisicao="PedidosPainel" titulo="Total de pedidos" tipo="dado"/>
                    <Item requisicao="ProdutosPainel" titulo="Produtos vendidos" tipo="dado"/>
                    <Item requisicao="MetaPainel" titulo="Percentual da meta" legenda="Percentual sobre R$ 1.500.00,00" tipo="dado"/>
                </PainelItens>

                <Lista requisicao="MidiaPainel" titulo="Receita por Mídia"/>
                <Lista requisicao="DevicePainel" titulo="Receita por Device"/>
                <Lista requisicao="CategoriaPainel" titulo="Receita por Categoria"/>
            </Main>
        </Fragment>
    );
};
export default Home;