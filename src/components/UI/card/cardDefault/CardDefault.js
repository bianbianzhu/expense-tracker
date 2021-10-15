import React from 'react';
import './CardDefault.scss';

const CardDefault = (props) => {

    const classList = 'card-default ' + props.className;

    return (
        <div className={classList}>
            {props.children}
        </div>
    );
};

export default CardDefault;