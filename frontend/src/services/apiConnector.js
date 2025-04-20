import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/v1", // 👈 your backend's base URL
    withCredentials: true, // Optional, only if you're using cookies/auth
});

export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method: method,
        url: url, // Can now be relative like "/course/getCategoryPageDetails"
        data: bodyData || null,
        headers: headers || null,
        params: params || null,
    });
};
