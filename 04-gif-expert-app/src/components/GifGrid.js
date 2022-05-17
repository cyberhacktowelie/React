// import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [ images, setImages ] = useState([]);

    const { data:images , loading } = useFetchGifs(category);

    // useEffect(() => {
    //     // getGifs();
    //     // getGifs(category).then(img => setImages(img));  
    //     getGifs(category).then(setImages);
    // }, [ category ]);


    // const apiKey = 'QKXFCiGkEFDCSb1fyIPKGNNZ2wIx1E5g';
    // const getGifs = async () => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${apiKey}`;
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();

    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }});

    //     // console.log(gifs);
    //     setImages(gifs);
    // };

    // getGifs();

    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {/* { loading ? <p>Cargando...</p> : null } */}
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem key={ img.id} {...img} />
                    ))
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}