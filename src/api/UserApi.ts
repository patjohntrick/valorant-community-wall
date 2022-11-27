import { FormDTO } from '../dto';

export const BASE_URI = process.env.PORT || 'http://localhost:3003/api/';

// Register
export const register = async (userData: FormDTO) => {
  const response = await fetch(`${BASE_URI}users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  return { response, data };
};
