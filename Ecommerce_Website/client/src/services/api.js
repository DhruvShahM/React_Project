import axios from 'axios';

const URL='http://localhost:8000';
export const authenticateSignup=async (data)=>{
    try {
        const headers = {
            "Content-Type": "application/json"
          };
        return await axios.post(`${URL}/signup`,data,{headers});
    } catch (error) {
        debugger
        console.log(error);
    }
}

export const authenticateLogin=async (data)=>{
    try {
        const headers = {
            "Content-Type": "application/json"
          };
        return await axios.post(`${URL}/login`,data,{headers});
    } catch (error) {
        console.log(error);
        return error.response;
    }
}