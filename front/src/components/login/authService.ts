import axios from 'axios';

const API_URL = 'YOUR_API_URL'; // Substitua pela sua URL da API

interface LoginResponse {
  access_token: string;
}

interface UserResponse {
  Codigo: string;
  Nome: string;
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  const headers = {
    'Content-Type': 'application/json',
    'username': username,
    'password': password,
    'grant_type': 'password',
  };

  const response = await axios.post<LoginResponse>(
    `${API_URL}/api/oauth2/v1/token`,
    null,
    { headers }
  );

  localStorage.setItem('token', response.data.access_token);
  const now = new Date();
  localStorage.setItem('loginTime', now.getTime().toString());
  localStorage.setItem('userApproved', username);

  return response.data;
};

export const getUserInfo = async (username: string): Promise<UserResponse> => {
  const response = await axios.get<UserResponse>(
    `${API_URL}/getNome?cCodUser=${username}`
  );

  localStorage.setItem('idUser', response.data.Codigo);
  localStorage.setItem('nomeUser', response.data.Nome);

  return response.data;
};
