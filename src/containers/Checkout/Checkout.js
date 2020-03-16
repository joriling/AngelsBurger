import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
                <div>
                    <CheckoutSummary 
                        ingredients={this.state.ingredients}
                        checkoutCancelled={this.checkoutCancelHandler}
                        checkoutContinue={this.checkoutContinuedHandler}
                         />
                        
                </div>
            );
    }
}

export default Checkout;