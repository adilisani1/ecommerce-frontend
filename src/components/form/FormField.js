import './Form.css';

import React from 'react';


export const FormField = ({ label, name, type, value, onChange, required, placeholder }) => {



    return (


        <div className="form-group">

            <label htmlFor={name}>{label}</label>
            <input
                className="form-control"
                name={name}
                id={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder} />

        </div>


    )
}