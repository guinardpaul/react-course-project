import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURSHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.PURSHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder)
      };

    case actionTypes.PURSHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  };
};

export default reducer;