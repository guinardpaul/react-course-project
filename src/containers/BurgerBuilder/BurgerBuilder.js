import React, { Component } from 'react';
import Aux from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purshasable: false
  };

  updatePurshaseState() {
    const ingredients = {
      ...this.state.ingredients
    };
    // Create array of values
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({
      purshasable: sum > 0
    });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState(
      {
        totalPrice: newPrice,
        ingredients: updatedIngredients
      },
      () => this.updatePurshaseState()
    );
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceReduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceReduction;
    this.setState(
      {
        totalPrice: newPrice,
        ingredients: updatedIngredients
      },
      () => this.updatePurshaseState()
    );
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal />
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsRemoved={this.removeIngredientHandler}
          ingredientsAdded={this.addIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purshasable={this.state.purshasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
