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