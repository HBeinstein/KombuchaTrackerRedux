import * as a from './ActionTypes.js';

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, id } = keg;
  return {
    type: a.ADD_KEG,
    name,
    brand,
    price,
    alcoholContent,
    id
  }
}