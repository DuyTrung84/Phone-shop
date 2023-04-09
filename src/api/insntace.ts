import axios from "axios";
let token = JSON.parse(localStorage.getItem("user") as string);
const insntace = axios.create({
    baseURL: "http://localhost:8081/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`
    },
});

export default insntace;