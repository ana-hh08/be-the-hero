import  axios from 'axios';

const api = axios.create({//variavel api
    baseURL:'http://localhost:3333', //parte da url que vai ser mantida entre todas as chamadas
}) 

export default api; //assim todos conseguem exportar este arquivo