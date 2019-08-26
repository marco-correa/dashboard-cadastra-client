import axios from 'axios';

const urlBaseApi = 'http://localhost:8080';

const ApiService = {

    ReceitaPainel : () =>{
        return axios.get(urlBaseApi + '/receita/painel');
    },
    PedidosPainel : () =>{
        return axios.get(urlBaseApi + '/pedido/painel');
    },
    ProdutosPainel : () =>{
        return axios.get(urlBaseApi + '/produto/painel');
    },
    MetaPainel : () =>{
        return axios.get(urlBaseApi + '/meta');
    },

    MidiaPainel : () =>{
        return axios.get(urlBaseApi + '/midia/painel');
    },
    DevicePainel : () =>{
        return axios.get(urlBaseApi + '/device/painel');
    },
    CategoriaPainel : () =>{
        return axios.get(urlBaseApi + '/categoria/painel');
    }    
};
export default ApiService;