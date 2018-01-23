import React from 'react';
import AuxW from '../../../hoc/AuxW';

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
            <p>Continue to Checkout?</p>
        </AuxW>
    )

};

export default orderSummary;