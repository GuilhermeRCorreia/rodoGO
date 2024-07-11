// src/services/preNotaService.ts

const BASE_URL = 'http://172.16.99.174:8400/rest/PreNota/ListaPreNota';

export const fetchPreNotas = async (page: number = 1, numItems: number = 20) => {
  const url = `${BASE_URL}?pag=${page}&numItem=${numItems}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
