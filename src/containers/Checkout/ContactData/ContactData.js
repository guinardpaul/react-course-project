import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    loading: false,
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  };

  orderHandler = event => {
    event.preventDefault();

    this.setState({
      loading: true
    });
    // alert('You continue!');
    const order = {
      ingredients: this.state.ingredients,
      price: this.props.price,
      customer: {
        name: 'Paul GUINARD',
        address: {
          street: '10, rue trucMuche',
          zipCode: 31400,
          country: 'France'
        },
        email: 'toto@email.com'
      },
      deliveryMethod: 'fastest'
    };

    axios
      .post('/orders.json', order)
      .then(resp => {
        this.setState({
          loading: false
        });
        this.props.history.push('/');
        console.log(resp);
      })
      .catch(err => {
        this.setState({
          loading: false
        });
        console.log(err);
      });
  };

  render() {
    let form = (
      <form>
        <input
          type="text"
          className={classes.Input}
          name="name"
          placeholder="Your name"
        />
        <input
          type="text"
          className={classes.Input}
          name="email"
          placeholder="Your email"
        />
        <input
          type="text"
          className={classes.Input}
          name="street"
          placeholder="street"
        />
        <input
          type="text"
          className={classes.Input}
          name="postalCode"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
