import axios from "axios";

const FetchData = axios.create({
    baseURL:'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})


export default FetchData