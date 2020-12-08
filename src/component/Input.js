import React from 'react';
import { useState } from 'react'

const Input = ({ label, placeholder, collectstate, name, type = 'text' }) => {

    const [state, setState] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target;
        setState(() => { return { [name]: value } })
        collectstate(name, value)
    }

    return (
        <div class="form-group">
            <label className="font-weight-bold text-xs" for="exampleInputEmail1 text-xs"> {label} </label>
            <input name={name} collectstate={collectstate} onChange={handleChange} type={type} class="form-control text-xs-s px-2" placeholder={placeholder} id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
    );
}

export default Input;
