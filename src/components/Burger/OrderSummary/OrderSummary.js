import React from 'react';
import Aux from '../../../hoc/Auxil';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)} €</strong>
      </p>
      <p>Continue to Checkout ?</p>
      <Button clicked={props.purshaseCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purshaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
