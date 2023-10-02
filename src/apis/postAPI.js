import axiosInstance from "./axiosinstance";
const baseUrl = "https://modeniture-backend-83b4.onrender.com/api/v1";
class DataAPI {
  handleData = async (url, data, method, isFile, onProgress) => {
    return await axiosInstance(`${baseUrl}${url}`, {
      headers: {
        "Content-Type": isFile ? "multipart/form-data" : "application/json",
      },
      method: method ?? "get",
      data: data ? (isFile ? data : JSON.stringify(data)) : undefined,
      onUploadProgress: onProgress ? onProgress : () => {},
    });
  };
}

const handleGetData = new DataAPI();
export default handleGetData;
