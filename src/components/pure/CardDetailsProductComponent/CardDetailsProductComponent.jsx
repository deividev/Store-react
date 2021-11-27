import React, { useMemo } from 'react';
import './CardDetailsProductComponent.scss';

const CardDetailsProductComponent = (props) => {
    let { id, title, description, price, image } = props.history.location.state;

    return (
            <div className="item">
                <h4 className="title-header">{title}</h4>
                <p >{description}</p>
                <img className="px-20" width="200px" height="200px" src={image}alt="" />
                <span>{price}</span>
            </div>
    );
};


export default CardDetailsProductComponent;