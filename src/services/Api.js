import axios from "axios"

const baseUrl = `https://bloodbankback-v7oy.onrender.com${process.env.REACT_APP_BASEURL}`
// const baseUrl = `${process.env.REACT_APP_BASEURL}`
// const baseUrl = `${window.location.origin}${process.env.REACT_APP_BASEURL}`

const Api=axios.create({baseURL:baseUrl});

Api.interceptors.request.use((req)=>{
    if(localStorage.getItem("token")){
        req.headers.Authorization=`Bearer ${localStorage.getItem("token")}`;
    }
    return req;
});
export default Api;