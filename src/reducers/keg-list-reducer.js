import * as a from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, id } = action;
  switch (action.type){
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        name,
        brand,
        price,
        alcoholContent,
        id: id
      }
    });
  default:
    return state;
  }
}

