import React from 'react';
import AuxW from '../../../hoc/AuxW/AuxW';
import Button from '../../UI/Button/Button';



const orderSummary = (props) => {
    const ingridientsSummary = Object.keys(props.ingredients)
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                </li> );
        })

    return (
        <AuxW>
            <h3>Your Order</h3>
            <p>A delcious burger with following ingredients:</p>
            <ul>
                {ingridientsSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </AuxW>
    )

};

export default orderSummary;