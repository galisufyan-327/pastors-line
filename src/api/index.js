import axios from "axios";

export const BASE_API_URL = process.env.REACT_APP_API_URL + "/api";

export const authInterceptor = [
  config => {
    const token = localStorage.getItem('token') || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE3MSwiZXhwIjoxNjM5NDY2NjE1fQ.9vE-glLQtV2NT3gNMkqeRkrWWZAhYCqX-_ibs7lC8GY'

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
];

export const Service = url =>
  axios.create({
    baseURL: BASE_API_URL + url
  });

export const AuthorizedService = url => {
  const authorizedService = Service(url);
  authorizedService.interceptors.request.use(...authInterceptor);
  return authorizedService;
};
