import * as a from './ActionTypes.js';

export const addKeg = (keg) => {
  const { name, description, id } = keg;
  return {
    type: a.ADD_KEG,
    name: name,
    brand: description,
    price: price,
    alcoholContent: alcoholContent,
    id: id
  }
}