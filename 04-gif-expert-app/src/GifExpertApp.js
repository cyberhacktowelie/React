import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categories = ['One Punch', 'Dragon Ball', 'Samurai X'];
    // const [ categories, setCategories ] = useState(['One Punch']);
    const [ categories, setCategories ] = useState(defaultCategories);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Hunter X Hunter']);
    // };  



    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={handleAdd}>Agregar Categoria</button> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category} /> 
                        // return (
                        //     <li key={category}>
                        //         {category}
                        //     </li>
                        // );
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;