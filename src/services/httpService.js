import axios from 'axios';
import { toast } from 'react-toastify';

 axios.create({
    baseURL: 'http://localhost:3000/sevices'
  })




axios.interceptors.response.use(null, (error) => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.log(error);
        toast.error('مشکلی از سمت سرور رخ داده است.', {
            position: 'top-right',
            closeOnClick: true,
        });
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
