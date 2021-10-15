import React from 'react';
import './CheckBox.scss'

const CheckBox = (props) => {
    
    let checkbox_id;

    if (props.checkbox_id) {
        checkbox_id = props.checkbox_id;
    } else {
        console.log('checkbox needs an id to be linked with label');
    }

    return (
        <>
         <input type="checkbox" id={checkbox_id}/>
         <label htmlFor={checkbox_id} className="checkbox__box"></label>
        </>
    );
};

export default CheckBox;