import http from '../common/http-common';
const API_URL = "coleta/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const create = data => {
    const formData = new FormData();
    formData.append('id', data.id);
    formData.append('descricao', data.descricao);
    formData.append('dataColeta', data.Coleta);
    formData.append('usuario_id', data.usuario_id);
    formData.append('postodecoleta_id', data.postodecoleta_id);
    formData.append('statuscoleta', data.statuscoleta);

    return http.mainInstance.post(API_URL + "create", formData);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};


const ColetaService = {
    findAll,
    findById,
    create,
    inativar,
}

export default ColetaService;