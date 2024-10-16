import http from '../common/http-common';
const API_URL = "produto/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const create = data => {
    const formData = new FormData();

    formData.append('nome', data.nome);
    formData.append('descricao', data.descricao);

    return http.mainInstance.post(API_URL + "create", formData);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};


const ProdutoService = {
    findAll,
    findById,
    create,
    inativar,
}


 export default ProdutoService;





