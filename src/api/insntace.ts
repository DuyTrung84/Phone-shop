import axios from "axios";
// let token = JSON.parse(localStorage.getItem("user") as string);
const insntace = axios.create({
    baseURL: "http://localhost:8081/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ0OTVhYjk2N2MwNmZjYmI0NWJjOCIsImlhdCI6MTY4MTEwNjA3MywiZXhwIjoxNjgxMTkyNDczfQ.nG9vnCjIo-j1c609tTYOtemg-snaZXWiC5mP94fXepw`
        // "Authorization": `Bearer ${token.accessToken}`
    },
});

export default insntace;