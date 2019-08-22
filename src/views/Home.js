import React from 'react';
import Item from '../components/Item';
import Lista from '../components/Lista';

import styled from 'styled-components';

const PainelItens = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
`;



const Home = () => {
    return(
        <main>
            <div className="jumbotron">
                <h1 className="text-center">Dashboard Cadastra</h1>
            </div>

            <PainelItens>
                <Item requisicao="Receita" titulo="Receita total" />
                <Item requisicao="Pedidos" titulo="Total de pedidos" />
                <Item requisicao="Produtos" titulo="Produtos vendidos" />
                <Item requisicao="Meta" titulo="Percentual da meta" />
            </PainelItens>

            <Lista />
        </main>
    );
};
export default Home;