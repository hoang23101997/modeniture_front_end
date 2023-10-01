import axiosInstance from "./axiosinstance"
const baseUrl = "http://localhost:3001/api/v1"
const authAPI = {
    login: (loginValues) => axiosInstance.post(`${baseUrl}/auth/login`, loginValues),
    register: (registerValues) => axiosInstance.post(`${baseUrl}/auth/register`, registerValues),
    authInfo: () =>  axiosInstance.get(`${baseUrl}/auth/me`),
}
console.log(authAPI.authInfo)
export default authAPI