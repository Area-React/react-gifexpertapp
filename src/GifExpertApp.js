import React, { useState } from 'react';
import { AddCategory } from './tests/components/AddCategory';
import { GifGrid } from './tests/components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [ categories, setCategories ] = useState(['One Punch']);
    // const handleAdd = () => {
    //     // 'HunterXHunter'
    //     // categories.push('HunterXHunter');
    //     // console.log(categories);
    //     setCategories( ['HunterXHunter', ...categories ] );
    //     setCategories( cats => [  ...categories, 'HunterXHunter' ] );
    //     // console.log(categories);
    // }

    // console.log(categories);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            {/* <AddCategory /> */}
            <hr />
{/* 
            <button
                onClick={ 
                    handleAdd
                }
            >
            Agregar
            </button> */}

            {/* <ol>
                <li>One</li>
                <li>Samurai</li>
                <li>Dragon</li>
            </ol> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = { category } 
                            category = { category } 
                        />
                        // <li key = { category }> { category }</li>
                    ))
                }
            </ol>

        </>
    );
}

export default GifExpertApp;

