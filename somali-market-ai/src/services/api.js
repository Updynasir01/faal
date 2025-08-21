import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
};

// Content API
export const contentAPI = {
  generate: (contentData) => api.post('/content/generate', contentData),
  getUserContent: () => api.get('/content/user'),
  getContent: (id) => api.get(`/content/${id}`),
};

// Analytics API
export const analyticsAPI = {
  getOverview: (timeRange = '30d') => api.get(`/analytics/overview?timeRange=${timeRange}`),
  getPlatforms: () => api.get('/analytics/platforms'),
  getTopPosts: (limit = 10) => api.get(`/analytics/top-posts?limit=${limit}`),
  getPerformanceTimeline: (days = 30) => api.get(`/analytics/performance-timeline?days=${days}`),
};

// User API
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (profileData) => api.put('/users/profile', profileData),
  updateBusiness: (businessData) => api.put('/users/business', businessData),
  changePassword: (passwordData) => api.put('/users/password', passwordData),
  getStats: () => api.get('/users/stats'),
};

export default api;
