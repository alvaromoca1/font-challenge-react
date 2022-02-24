import axios from 'axios';

export const AllClient =()=>{
    return axios.get(`${process.env.REACT_APP_URL_BACKEND}/client`)
        .then(response=>{
            return response.data;
        })
        .catch(err => {
            console.log(err);
            throw err;
    });
}
export const RegisterClient=(name,lastName,birthDay)=>{
    return axios.post(`${process.env.REACT_APP_URL_BACKEND}/client`,{name,lastName,birthDay})
        .then(response=>{
            return response.data;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}
export const Average =()=>{
    return axios.get(`${process.env.REACT_APP_URL_BACKEND}/client/average`)
        .then(response=>{
            return response.data;
        })
        .catch(err => {
            console.log(err);
            throw err;
    });
}