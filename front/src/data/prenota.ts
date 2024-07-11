// src/data/prenota.ts
import { useQuery } from 'react-query';
import { fetchPreNotas } from 'src/services/preNotaService';

export const usePreNotas = () => {
  return useQuery(['prenotas'], () => fetchPreNotas());
};
