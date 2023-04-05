import axios from "axios";
const insntace = axios.create({
    baseURL: "http://localhost:8081/api"
});

export default insntace;