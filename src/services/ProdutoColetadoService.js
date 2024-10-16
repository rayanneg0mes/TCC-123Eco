import http from '../common/http-common';
const API_URL = "produtocoletado/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const create = data => {
    const formData = new FormData();
    formData.append('id', data.id);
    formData.append('coleta_id', data.coleta_id);
    formData.append('produto_id', data.produto_id);
    formData.append('quantidade', data.quantidade);
    formData.append('obs', data.obs);

    return http.mainInstance.post(API_URL + "create", formData);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};


const ProdutoColetadoService = {
    findAll,
    findById,
    create,
    inativar,
}


 export default ProdutoColetadoService;





