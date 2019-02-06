import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purshaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURSHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purshaseBurgerFailed = (error) => {
  return {
    type: actionTypes.PURSHASE_BURGER_FAIL,
    error: error
  };
};

export const purshaseBurgerStart = () => {
  return {
    type: actionTypes.PURSHASE_BURGER_START,
  }
}

export const purshaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purshaseBurgerStart());
    axios
      .post('/orders.json', orderData)
      .then(resp => {
        console.log(resp.data);
        dispatch(purshaseBurgerSuccess(resp.data.name, orderData));
      })
      .catch(err => {
        dispatch(purshaseBurgerFailed(err));
      });
  };
};