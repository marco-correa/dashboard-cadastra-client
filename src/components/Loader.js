import React from 'react';
import styled from 'styled-components';

const Bloco = styled.div`
    height: 100%;
`;

const Loader = () => {
    return(
        <Bloco className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </Bloco>
    )
};
export default Loader;