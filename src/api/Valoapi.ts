import { API_URL } from '../constants';

// VALORANT
// get api
export const getAPI = async (param: string) => {
  const response = await fetch(`${API_URL}${param}`);
  const data = await response.json();
  return data;
};

// USER
