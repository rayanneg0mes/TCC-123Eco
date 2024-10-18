import http from '../common/http-common';
const API_URL = "coleta/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const create = (data, email) => {
    const formData = new FormData();
    formData.append('descricao', data.descricao); 
    formData.append('postodecoleta', data.postodecoleta.toString()); 

    for (const key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      } 

    return http.mainInstance.post(API_URL + `create/${email}`, formData);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};


const ColetaNovoService = {
    findAll,
    findById,
    create,
    inativar,
}

export default ColetaNovoService;