import { API_key } from '../constants';

console.log(API_key);

const getUserPosition = async() => {
  const position = await fetch(`http://api.ipstack.com/check?access_key=${API_key}`)
  const data = await position.json()
  console.log(data.continent_code);
};

export { getUserPosition } ;