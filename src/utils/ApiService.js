import axios from 'axios';

const ApiService = {

    Receita : () =>{
        //return axios.get('/receita/resumo');
        return axios.get('http://pmweb.agencia.pmweb.com.br/teste-frontend/api/intranet/campaigns.json');
    },
    Pedidos : () =>{
        //return axios.get('/pedidos/resumo');
        return axios.get('http://pmweb.agencia.pmweb.com.br/teste-frontend/api/intranet/campaigns.json');
    },
    Produtos : () =>{
        //return axios.get('/produtos/resumo');
        return axios.get('http://pmweb.agencia.pmweb.com.br/teste-frontend/api/intranet/campaigns.json');
    },
    Meta : () =>{
        //return axios.get('/meta/resumo');
        return axios.get('http://pmweb.agencia.pmweb.com.br/teste-frontend/api/intranet/campaigns.json');
    }    
};
export default ApiService;