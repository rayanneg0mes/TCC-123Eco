import http from '../common/http-common';
const API_URL = "postoDeColeta/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const create = data => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('logradouro', data.logradouro);
    formData.append('numero', data.numero);
    formData.append('complemento', data.complemento);
    formData.append('cep', data.cep);
    formData.append('bairro', data.bairro);
    formData.append('cidade', data.cidade);
    formData.append('uf', data.uf);
    formData.append('pontoRef', data.pontoRef);

    return http.mainInstance.post(API_URL + "create", formData);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};


const PostoColetaService = {
    findAll,
    findById,
    create,
    inativar,
}

export default PostoColetaService;