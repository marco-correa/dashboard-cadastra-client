import axios from 'axios';

const ApiService = {

    ReceitaPainel : () =>{
        return axios.get('/receita/painel');
    },
    PedidosPainel : () =>{
        return axios.get('/pedido/painel');
    },
    ProdutosPainel : () =>{
        return axios.get('/produto/painel');
    },
    MetaPainel : () =>{
        return axios.get('/meta');
    },
    MidiaPainel : () =>{
        return axios.get('/midia/painel');
    },
    DevicePainel : () =>{
        return axios.get('/device/painel');
    },
    CategoriaPainel : () =>{
        return axios.get('/categoria/painel');
    }    
};
export default ApiService;