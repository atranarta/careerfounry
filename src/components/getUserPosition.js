import { API_key } from '../constants';

const getUserPosition = async() => {
  const position = await fetch(`http://api.ipstack.com/check?access_key=${API_key}`)
  const data = await position.json()
  return data.continent_code;
};

export { getUserPosition } ;