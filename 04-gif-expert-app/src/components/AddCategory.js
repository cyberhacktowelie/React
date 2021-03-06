import React , { useState } from 'react';
import { PropTypes } from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        // console.log('HandleInputChange llamado');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputValue);

        if (inputValue.trim().length > 2) {
            setCategories(categories => [ inputValue, ...categories]);
            setInputValue('');
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            // onChange={(e) => setInputValue(e.target.value)}
            onChange={handleInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
