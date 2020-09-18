import * as a from './ActionTypes.js';

export const addKeg = (keg) => {
  const { name, description, id } = keg;
  return {
    type: a.ADD_KEG,
    name,
    brand,
    price,
    alcoholContent,
    id
  }
}