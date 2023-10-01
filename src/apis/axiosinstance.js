import axios from "axios";
const axiosInstance = axios.create({
    timeout: 30000
})
axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if(accessToken) {
        config.headers["x-access-token"] = accessToken;
    }
    return config;
})
export default axiosInstance